# JS demo

This demo proves the `imgui-hx` JS bindings against `jsimgui`.

## Build

1. Install the published `jsimgui` package:

```bash
bun install
```

That is enough to provide the runtime files and declaration files this repo uses under `node_modules/@mori2003/jsimgui/build`.

2. Regenerate the Haxe externs:

```bash
bun run generate:jsimgui-externs
```

3. Compile the demo:

```bash
haxe test/js/build.hxml
```

## Run

Serve the repository root and open:

`/test/js/index.html`

The demo loads `/node_modules/@mori2003/jsimgui/build/mod.js`, initializes `imgui.ImGuiImplWeb`, and renders a small window plus Dear ImGui's demo window.
