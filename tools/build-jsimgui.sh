#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
runtime_root="$repo_root/node_modules/@mori2003/jsimgui/build"

if ! command -v bun >/dev/null 2>&1; then
    echo "bun is required to use @mori2003/jsimgui." >&2
    exit 1
fi

if [ ! -f "$runtime_root/mod.js" ] || [ ! -f "$runtime_root/jsimgui.em.js" ] || [ ! -f "$runtime_root/mod.d.ts" ]; then
    echo "Missing @mori2003/jsimgui build output under $runtime_root. Run bun install first." >&2
    exit 1
fi

echo "Using jsimgui runtime from $runtime_root"
