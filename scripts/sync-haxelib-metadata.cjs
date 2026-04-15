#!/usr/bin/env node
const fs = require('node:fs')
const path = require('node:path')

const packageJsonPath = path.join(__dirname, '..', 'package.json')
const haxelibJsonPath = path.join(__dirname, '..', 'haxelib.json')

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
const haxelibJson = JSON.parse(fs.readFileSync(haxelibJsonPath, 'utf8'))

haxelibJson.name = packageJson.name
haxelibJson.version = packageJson.version
haxelibJson.license = packageJson.license
haxelibJson.description = packageJson.description

if (typeof packageJson.homepage === 'string' && packageJson.homepage.trim() !== '') {
	haxelibJson.url = packageJson.homepage.replace(/#readme$/, '')
}

fs.writeFileSync(haxelibJsonPath, `${JSON.stringify(haxelibJson, null, 4)}\n`, 'utf8')
console.log(`[jsimgui-hx] Synced ${path.basename(haxelibJsonPath)} from package.json`)
