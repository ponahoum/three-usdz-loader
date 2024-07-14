# Three USDZ Loader
[![npm version](https://badge.fury.io/js/three-usdz-loader.svg)](https://badge.fury.io/js/three-usdz-loader)

A basic **USDZ** (binary Universal Scene Description) reader for [**Three.js**](https://threejs.org)

The plugins **supports animation** as well as loading multiple USDZ at the same time.


## Features

- Loads .USDZ files in **ThreeJS** (100% frontend, no backend required)
- Typescript types for the loader
- Loading multiple USDZ at the same time
- Animations are supported
- Works on latests browsers:
  - Chrome
  - Mozilla
  - Edge
  - Safari on Mac (> 15.2)
  - Safari on iOS (> 15.2, might not work on all models due to memory limitations)


## Demo

You may find an online demo implementation (with Vue + Vuetify + Typescript) of this package on [usdz-viewer.net](https://www.usdz-viewer.net/)

The code of this demo is available on [usdz-viewer.net's GitHub](https://github.com/ponahoum/usdz-web-viewer)


## How to use

a. Install three-usdz-loader with npm

```bash
  npm install three-usdz-loader
```

b. The package uses **WebAssembly dependencies**. For those to work you have to **place those in your public folder**.
Copy the content of **node_modules/three-gltf-loader/external** to **your /public folder**

c. Make sure your web server has the proper headers to allow [SharedArrayBuffer](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).
To do so, you must add the following headers when serving your frontend application (the syntax may depend on which server you are using):
```
"headers": [
          {
            "key": "Cross-Origin-Embedder-Policy",
            "value": "require-corp"
          },
          {
            "key": "Cross-Origin-Opener-Policy",
            "value": "same-origin"
          }
        ]
```

d. Use this example code to make it work in your ThreeJs context

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

## Compatibility with ThreeJS version
- v1.0.7 was developed and tested with ThreeJS v0.140
- v1.0.9 was developed and tested with ThreeJS v0.166

As ThreeJS evolves, the package could be malfuntionning. Don't hesitate to report any bug you encounter when using a different version of ThreeJS than the ones mentionned above.

## Limitations
The loader currently only works on browsers supporting [SharedArrayBuffer](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) as well as [Atomics](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Atomics).

## License - What's behind
This package is based on [Autodesk's USD fork](https://github.com/autodesk-forks/USD/tree/release) and aims to make Autodesk implementation easy to use from a NPM package.
The implementation has been done by Autodesk using WebAssembly. Please consult their [GitHub](https://github.com/autodesk-forks/USD/tree/release) for any further information on the WebAssembly/Emscripten side of things.

