#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
deps_root="$repo_root/.deps"
emsdk_dir="$deps_root/emsdk"
python_env_dir="$deps_root/python"
python_user_base="$deps_root/python-user"
emsdk_version="${EMSDK_VERSION:-4.0.18}"
install_only=0

for arg in "$@"; do
    case "$arg" in
        --install-only)
            install_only=1
            ;;
        *)
            echo "Unknown argument: $arg" >&2
            exit 1
            ;;
    esac
done

log() {
    printf '[jsimgui-hx] %s\n' "$1"
}

fail() {
    printf '[jsimgui-hx] %s\n' "$1" >&2
    exit 1
}

if ! command -v git >/dev/null 2>&1; then
    fail "git is required to bootstrap submodules."
fi

if ! command -v bun >/dev/null 2>&1; then
    fail "bun is required to bootstrap jsimgui-hx."
fi

python_host_bin="$(command -v python3 || command -v python || true)"
if [ -z "$python_host_bin" ]; then
    fail "python3 or python is required to bootstrap jsimgui-hx."
fi

mkdir -p "$deps_root"

download_get_pip() {
    local output_path="$deps_root/get-pip.py"
    if [ -f "$output_path" ]; then
        return 0
    fi
    log "Downloading get-pip.py"
    "$python_host_bin" - "$output_path" <<'PY'
import pathlib
import sys
import urllib.request

output_path = pathlib.Path(sys.argv[1])
output_path.write_bytes(urllib.request.urlopen("https://bootstrap.pypa.io/get-pip.py").read())
PY
}

log "Updating local submodules"
git -C "$repo_root" submodule update --init --recursive lib/cimgui lib/jsimgui

if [ ! -d "$emsdk_dir/.git" ]; then
    log "Cloning local emsdk into .deps/emsdk"
    git clone https://github.com/emscripten-core/emsdk.git "$emsdk_dir"
fi

if [ ! -x "$emsdk_dir/upstream/emscripten/emcc" ]; then
    log "Installing Emscripten SDK $emsdk_version"
    (
        cd "$emsdk_dir"
        ./emsdk install "$emsdk_version"
        ./emsdk activate "$emsdk_version"
    )
else
    (
        cd "$emsdk_dir"
        ./emsdk activate "$emsdk_version" >/dev/null 2>&1 || true
    )
fi

# shellcheck disable=SC1090
export EMSDK_QUIET=1
source "$emsdk_dir/emsdk_env.sh" >/dev/null

use_python_venv=0
export PYTHONUSERBASE="$python_user_base"

if [ -x "$python_env_dir/bin/python" ] && "$python_env_dir/bin/python" -m pip --version >/dev/null 2>&1; then
    use_python_venv=1
elif "$python_host_bin" -c "import ply" >/dev/null 2>&1; then
    python_bin="$python_host_bin"
    pip_bin=""
else
    rm -rf "$python_env_dir"
    log "Creating local Python environment in .deps/python"
    if "$python_host_bin" -m venv "$python_env_dir" >/dev/null 2>&1 && "$python_env_dir/bin/python" -m pip --version >/dev/null 2>&1; then
        use_python_venv=1
    else
        rm -rf "$python_env_dir"
    fi
fi

if [ "$use_python_venv" -eq 1 ]; then
    python_bin="$python_env_dir/bin/python"
    pip_bin="$python_env_dir/bin/pip"
elif [ -z "${python_bin:-}" ]; then
    log "python venv unavailable; bootstrapping local pip in .deps/python-user instead"
    export PIP_BREAK_SYSTEM_PACKAGES=1
    if ! "$python_host_bin" -m pip --version >/dev/null 2>&1; then
        download_get_pip
        "$python_host_bin" "$deps_root/get-pip.py" --user >/dev/null
    fi
    log "Installing Python dependency ply"
    "$python_host_bin" -m pip install --user ply >/dev/null
    python_bin="$python_host_bin"
    pip_bin=""
fi

export PATH="$python_env_dir/bin:$PATH"

if [ -n "$pip_bin" ]; then
    log "Installing Python dependency ply"
    "$python_bin" -m pip install --upgrade pip >/dev/null
    "$pip_bin" install ply >/dev/null
fi

log "Installing lib/jsimgui node dependencies"
(
    cd "$repo_root/lib/jsimgui"
    bun install
)

if [ "$install_only" -eq 1 ]; then
    log "Bootstrap complete. Local build prerequisites are ready."
    exit 0
fi

log "Bootstrap complete."
