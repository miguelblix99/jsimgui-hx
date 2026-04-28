#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const cp = require('node:child_process');

const packageRoot = path.join(__dirname, '..');
const syncMetadataScript = path.join(__dirname, 'sync-haxelib-metadata.cjs');

cp.execFileSync(process.execPath, [syncMetadataScript], {
	cwd: packageRoot,
	stdio: 'inherit',
});

const packageJson = JSON.parse(fs.readFileSync(path.join(packageRoot, 'package.json'), 'utf8'));
const outputDir = path.join(packageRoot, 'build', 'haxelib');
const archiveName = `${packageJson.name}-${packageJson.version}.zip`;
const archivePath = path.join(outputDir, archiveName);
const requiredPaths = ['src', 'runtime', 'haxelib.json', 'README.md', 'LICENSE'];

for (const relativePath of requiredPaths) {
	const absolutePath = path.join(packageRoot, relativePath);
	if (!fs.existsSync(absolutePath)) {
		console.error(`[jsimgui-hx] Missing required release path: ${relativePath}`);
		process.exit(1);
	}
}

fs.mkdirSync(outputDir, { recursive: true });
fs.rmSync(archivePath, { force: true });

cp.execFileSync(
	'zip',
	['-r', archivePath, ...requiredPaths],
	{
		cwd: packageRoot,
		stdio: 'inherit',
	},
);

console.log(`[jsimgui-hx] Created Haxelib archive at ${archivePath}`);
