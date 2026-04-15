# JS demo

This demo proves the checked-in `jsimgui-hx` bindings and bundled runtime assets.

## Build

Compile the demo:

```bash
haxe test/js/build.hxml
```

No extern regeneration or runtime build step is required for the demo.

## Run

Serve the repository root and open:

`/test/js/index.html`

The demo loads `/runtime/jsimgui/mod.js`, initializes `imgui.ImGuiImplWeb`, and renders a small window plus Dear ImGui's demo window.
