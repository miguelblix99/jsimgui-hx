# jsimgui-hx

JS-only Haxe bindings for [Dear ImGui](https://github.com/ocornut/imgui), powered by the `jsimgui` WebAssembly runtime.

The public Haxe entrypoints live under `imgui.*`, while the runtime API follows `jsimgui`'s JS/WASM shape.

## Install

Install from Haxelib:

```bash
haxelib install jsimgui-hx
```

Or install from npm/Bun:

```bash
bun add jsimgui-hx
```

If your repo uses Bun trusted dependency scripts, trust `jsimgui-hx` so it can register itself into `.haxelib/` during install:

```bash
bun pm trust jsimgui-hx
```

For local development without publication, you can still use:

```bash
haxelib dev jsimgui-hx /path/to/jsimgui-hx
```

## Bundled Runtime Files

`jsimgui-hx` ships the prebuilt runtime files under `runtime/jsimgui/`:

- `mod.js`
- `jsimgui.em.js`
- `jsimgui-freetype.em.js`

Copy that directory into your app's public assets, for example to `/vendor/jsimgui/`, then load the served `mod.js` file with `JsRuntime.load(...)`.

Typical copy source paths:

- npm/Bun install: `node_modules/jsimgui-hx/runtime/jsimgui/`
- Haxelib install: `<haxelib libpath jsimgui-hx>/runtime/jsimgui/`

## Usage

```haxe
import imgui.Helpers.*;
import imgui.ImGui;
import imgui.ImGuiImplWeb;
import imgui.JsRuntime;

await JsRuntime.load("/vendor/jsimgui/mod.js");
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

For local repo setup, manual runtime/extern refresh steps, and release notes, see [CONTRIBUTING.md](CONTRIBUTING.md).

For a browser demo, see [test/js/README.md](test/js/README.md).
