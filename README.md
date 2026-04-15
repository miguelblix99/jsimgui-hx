# Dear ImGui for Haxe JS

JS-only Haxe bindings for [Dear ImGui](https://github.com/ocornut/imgui), powered by the published [`@mori2003/jsimgui`](https://www.npmjs.com/package/@mori2003/jsimgui) runtime.

The public Haxe entrypoints stay under `imgui.*`, but the JS API is intentionally `jsimgui`-shaped rather than trying to mirror the old native/C++ layer.

## Install

The haxelib name stays `imgui-hx`.

```bash
haxelib dev imgui-hx /path/to/jsimgui-hx
```

## Repo setup

Run:

```bash
bun install
```

That is the only bootstrap step. It installs the published `@mori2003/jsimgui` package, whose runtime files live under:

- `node_modules/@mori2003/jsimgui/build/mod.js`
- `node_modules/@mori2003/jsimgui/build/jsimgui.em.js`
- `node_modules/@mori2003/jsimgui/build/*.d.ts`

If you want to verify that runtime is present manually, run:

```bash
bun run build:jsimgui
```

If you want to regenerate the Haxe externs from the synced declaration files, run:

```bash
bun run generate:jsimgui-externs
```

To do both in one step:

```bash
bun run build:js
```

## Runtime usage

Load the `jsimgui` ESM runtime before initializing the web backend:

```haxe
import imgui.Helpers.*;
import imgui.ImGui;
import imgui.ImGuiImplWeb;
import imgui.JsRuntime;

await JsRuntime.load("/node_modules/@mori2003/jsimgui/build/mod.js");
await ImGuiImplWeb.init({ canvas: canvasElement });
```

In your own app, serve `@mori2003/jsimgui/build/mod.js` and `jsimgui.em.js` from whatever public path your frontend uses, then pass that `mod.js` URL to `JsRuntime.load(...)`.

Mutable JS inputs use boxed one-element arrays:

```haxe
var someFloatValue = boxFloat(0.0);

ImGui.begin("Hello");
ImGui.sliderFloat("Some slider", someFloatValue, 0.0, 1.0);

if (someFloatValue[0] == 1.0) {
    ImGui.text("Float value is at MAX (1.0)");
}

ImGui.end();
```

See [test/js/README.md](test/js/README.md) for the complete browser demo.
