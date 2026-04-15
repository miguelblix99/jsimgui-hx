# jsimgui-hx

JS-only Haxe bindings for [Dear ImGui](https://github.com/ocornut/imgui), powered by the published [`@mori2003/jsimgui`](https://www.npmjs.com/package/@mori2003/jsimgui) runtime.

The public Haxe entrypoints live under `imgui.*`, while the runtime API follows `jsimgui`'s JS/WASM shape.

## Install

Install the package:

```bash
bun add jsimgui-hx
```

If your repo uses Bun trusted dependency scripts, trust `jsimgui-hx` so it can register itself into `.haxelib/` during install:

```bash
bun pm trust jsimgui-hx
```

For local development without npm, you can still use:

```bash
haxelib dev jsimgui-hx /path/to/jsimgui-hx
```

## Runtime Files

The underlying JS runtime comes from `@mori2003/jsimgui` and is installed under:

- `node_modules/@mori2003/jsimgui/build/mod.js`
- `node_modules/@mori2003/jsimgui/build/jsimgui.em.js`
- `node_modules/@mori2003/jsimgui/build/*.d.ts`

Serve `mod.js` and `jsimgui.em.js` from your app's public path, then pass the served `mod.js` URL to `JsRuntime.load(...)`.

## Usage

```haxe
import imgui.Helpers.*;
import imgui.ImGui;
import imgui.ImGuiImplWeb;
import imgui.JsRuntime;

await JsRuntime.load("/node_modules/@mori2003/jsimgui/build/mod.js");
await ImGuiImplWeb.init({ canvas: canvasElement });

var someFloatValue = boxFloat(0.0);

ImGui.begin("Hello");
ImGui.sliderFloat("Some slider", someFloatValue, 0.0, 1.0);

if (someFloatValue[0] == 1.0) {
    ImGui.text("Float value is at MAX (1.0)");
}

ImGui.end();
```

## Development

For local repo setup, extern regeneration, and release notes, see [CONTRIBUTING.md](CONTRIBUTING.md).

For a browser demo, see [test/js/README.md](test/js/README.md).
