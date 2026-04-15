#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if ! command -v bun >/dev/null 2>&1; then
    echo "bun is required to build lib/jsimgui." >&2
    exit 1
fi

bash "$repo_root/tools/bootstrap-jsimgui-env.sh" --install-only

emsdk_dir="$repo_root/.deps/emsdk"
python_env_dir="$repo_root/.deps/python"
python_user_base="$repo_root/.deps/python-user"

# shellcheck disable=SC1090
export EMSDK_QUIET=1
source "$emsdk_dir/emsdk_env.sh" >/dev/null
export PATH="$python_env_dir/bin:$PATH"
export PYTHONUSERBASE="$python_user_base"

cd "$repo_root/lib/jsimgui"
bun build.ts "$@"
