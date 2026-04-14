# JS demo

This demo proves the `imgui-hx` JS bindings against `jsimgui`.

## Build

1. Build the `jsimgui` submodule runtime:

```bash
./tools/build-jsimgui.sh
```

This helper requires both `bun` and `emcc` to be installed locally.

2. Regenerate the Haxe externs:

```bash
node tools/generate-jsimgui-externs.mjs
```

3. Compile the demo:

```bash
haxe test/js/build.hxml
```

## Run

Serve the repository root and open:

`/test/js/index.html`

The demo loads `/lib/jsimgui/build/mod.js`, initializes `imgui.ImGuiImplWeb`, and renders a small window plus Dear ImGui's demo window.
