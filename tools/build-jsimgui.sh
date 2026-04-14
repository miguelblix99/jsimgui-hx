#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if ! command -v bun >/dev/null 2>&1; then
    echo "bun is required to build lib/jsimgui." >&2
    exit 1
fi

if ! command -v emcc >/dev/null 2>&1; then
    echo "emcc is required to build lib/jsimgui. Install Emscripten and retry." >&2
    exit 1
fi

git -C "$repo_root" submodule update --init --recursive lib/jsimgui

cd "$repo_root/lib/jsimgui"
bun install
bun build.ts "$@"
