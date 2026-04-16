# JS demo

This demo proves the checked-in `jsimgui-hx` bindings and bundled runtime assets.

## Build

Compile the demo:

```bash
haxe test/js/build.hxml
```

No extern regeneration or runtime build step is required for the demo.

## Run

From the repository root, start a local static file server:

```bash
python3 -m http.server 8126
```

Then open:

`http://127.0.0.1:8126/test/js/index.html`

Important: serve the repository root, not just `test/js/`, because the demo loads:

- `/build/test-js/main.js`
- `/runtime/jsimgui/mod.js`

The demo loads `/runtime/jsimgui/mod.js`, initializes `imgui.ImGuiImplWeb`, and renders a small window plus Dear ImGui's demo window.
