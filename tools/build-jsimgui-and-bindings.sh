
echo "Updating git submodules..."
git submodule update --init --recursive

echo "Building docker container and compiling wasm..."
cd lib/jsimgui
docker build -t jsimgui -f .github/Dockerfile .
docker run -v "$PWD:/workspace" jsimgui bash -c "npm install && node build.ts"

echo "Copying output to runtime directory..."
cd ../../
rm -rf runtime/jsimgui
cp -r lib/jsimgui/build/ runtime/jsimgui

echo "Generating jsimgui externs..."
bun tools/generate-jsimgui-externs.mjs

echo "All done :) You're welcome!"