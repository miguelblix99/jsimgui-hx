# Contributing

## Repo Setup

Install dependencies:

```bash
bun install
```

That installs the published `@mori2003/jsimgui` runtime used by the extern generator.

## Regenerate Externs

Check that the upstream runtime package is present:

```bash
bun run build:jsimgui
```

Regenerate the Haxe externs from the installed declaration files:

```bash
bun run generate:jsimgui-externs
```

Run both steps together:

```bash
bun run build:js
```

## Release

Inspect the package contents before publishing:

```bash
bun run pack:dry
```

Publish a new version:

```bash
npm login
npm publish
```

## Haxelib Release

Build the curated Haxelib zip:

```bash
bun run pack:haxelib
```

That writes `build/haxelib/jsimgui-hx-<version>.zip` and includes only:

- `src/`
- `runtime/`
- `haxelib.json`
- `README.md`
- `LICENSE`

Test the zip locally:

```bash
haxelib install build/haxelib/jsimgui-hx-<version>.zip
```

Submit it:

```bash
haxelib submit build/haxelib/jsimgui-hx-<version>.zip
```
