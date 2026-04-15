#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
runtime_root="$repo_root/node_modules/@mori2003/jsimgui/build"
bundled_runtime_root="$repo_root/runtime/jsimgui"

if ! command -v bun >/dev/null 2>&1; then
    echo "bun is required to use @mori2003/jsimgui." >&2
    exit 1
fi

if [ ! -f "$runtime_root/mod.js" ] || [ ! -f "$runtime_root/jsimgui.em.js" ] || [ ! -f "$runtime_root/jsimgui-freetype.em.js" ] || [ ! -f "$runtime_root/mod.d.ts" ]; then
    echo "Missing @mori2003/jsimgui build output under $runtime_root. Run bun install first." >&2
    exit 1
fi

mkdir -p "$bundled_runtime_root"
cp "$runtime_root/mod.js" "$bundled_runtime_root/mod.js"
cp "$runtime_root/jsimgui.em.js" "$bundled_runtime_root/jsimgui.em.js"
cp "$runtime_root/jsimgui-freetype.em.js" "$bundled_runtime_root/jsimgui-freetype.em.js"

echo "Synced jsimgui runtime from $runtime_root to $bundled_runtime_root"
