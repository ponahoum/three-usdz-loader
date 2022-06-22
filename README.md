
# Three USDZ Loader

A basic **USDZ** (binary Universal Scene Description) reader for [**Three.js**](https://threejs.org)
The plugins **supports animation** as well as loading multiple USDZ at the same time.


## Features

- Loads .USDZ files in **ThreeJS** (100% frontend, not backend required)
- Typescript types for the loader
- Loading multiple USDZ at the same time
- Animations are supported
- Works on latests Chrome / Mozilla / Edge (might not work on Safari / iOS)


## Demo

You may find an online demo implementation (with Vue + Vuetify + Typescript) of this package on [usdz-viewer.net](https://www.usdz-viewer.net/)
The code of this demo is available on [usdz-viewer.net's GitHub]()


## How to use

a. Install three-usdz-loader with npm

```bash
  npm install three-usdz-loader
```

b. The package uses **WebAssembly dependencies**. For those to work you have to **place those in your public folder**.
Copy the content of **node_modules/three-gltf-loader/external** to **your /public folder**

c. Use this example code to make it work in your ThreeJs context

```js
import { USDZLoader } from "three-usdz-loader";

...

// Setup the USDZ loader
// You may place external dependencies (.wasm / worker files) in a subfolder of the public folder. 
// In this case, pass the path of this folder as an arg to the USDZLoader constructor
const loader = new USDZLoader();

// Create a ThreeJs Group in which the loaded USDZ model will be placed
const group = new THREE.Group();

// Add the group to the scene
this.scene.add(group);

// Load your file. File is of type File
const loadedModel = await loader.loadFile(file, group);

...

// Later on, if you need to cleanup the model from the scene, simply use
loadedModel.clean()

```
## License - What's behind

This package is based on [Autodesk's USD fork](https://github.com/autodesk-forks/USD/tree/release) and aims to make Autodesk implementation easy to use from a NPM package.
The implementation has been done by Autodesk using WebAssembly. Please consult their [GitHub](https://github.com/autodesk-forks/USD/tree/release) for any further information on the WebAssembly/Emscripten side of things.

