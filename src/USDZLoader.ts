import { getFileExtension, getRandomGuid, readFileAsync } from './Utils/utils';
import { RenderDelegateInterface } from './ThreeJsRenderDelegate';
import { USDModule } from './USDModule';
import { USDZInstance } from './USDZInstance';

export class USDZLoader {
  // The USD module from AutoDesk. Only one should be there at a the time.
  private usdModule!: USDModule;

  // Tells if a model is currently loading
  private modelIsLoading = false;

  // Tells if the module is ready to be used
  private moduleReady = false;

  /**
   * dependenciesDirectory is the directory where emHdBindings.js, emHdBindings.data, emHdBindings.wasm and emHdBindings.worker.js are located
   * Give the path without the end slash (/). Ex: http://localhost:8080/myWasmBinaries
   * @param dependenciesDirectory
   */
  constructor(dependenciesDirectory = '') {
    this.initialize(dependenciesDirectory);
  }

  /**
   * Initializes the WASM module
   */
  private async initialize(depDirectory: string): Promise<void> {
    // Create script tag on the page and gathers the module
    const usdBindingsTag = document.createElement('script');
    usdBindingsTag.onload = async () => {
      const module = await window.getUsdModule(undefined, depDirectory);
      await module.ready;
      this.moduleReady = true;
      this.usdModule = module;
    };
    document.head.appendChild(usdBindingsTag);
    usdBindingsTag.setAttribute('src', depDirectory + '/emHdBindings.js');
  }

  /**
   * Gathers the module while ensuring it's ready to be used
   */
  private async waitForModuleReady(): Promise<USDModule> {
    while (!this.moduleReady) {
      await new Promise((resolve) => setTimeout(resolve, 10));
    }
    return this.usdModule;
  }

  /**
   * Loads a USDZ file into the target ThreeJS Group
   * @param file
   * @param targetGroup
   */
  async loadFile(file: File, targetGroup: THREE.Group): Promise<USDZInstance> {
    if (this.modelIsLoading) {
      throw 'A model is already loading. Please wait.';
    }

    // Wait for module to be ready
    await this.waitForModuleReady();
    this.modelIsLoading = true;
    const result = await readFileAsync(file);
    const instance = this.loadUsdFileFromArrayBuffer(file.name, result as ArrayBuffer, targetGroup);
    this.modelIsLoading = false;
    return instance;
  }

  /**
   * Raw methods that loads the USDZ file array buffer into the target ThreeJS Group
   * @param filename
   * @param usdFile
   * @param targetGroup
   */
  private loadUsdFileFromArrayBuffer(filename: string, usdFile: ArrayBuffer, targetGroup: THREE.Group): USDZInstance {
    // Generate random filename to avoid conflict when opening a file multiple times
    const extension = getFileExtension(filename);
    const randomFileName = getRandomGuid();
    const inputFileName = randomFileName + '.' + extension;

    // Give the RAW data to the USD module
    this.usdModule.FS.createDataFile('/', inputFileName, new Uint8Array(usdFile), true, true, true);

    // Create Render Interface / Driver
    const renderInterface = new RenderDelegateInterface(inputFileName, targetGroup);
    const driver = new (this.usdModule as any).HdWebSyncDriver(renderInterface, inputFileName);
    renderInterface.setDriver(driver);
    driver.Draw();

    // Returns an object of with all of this that can be manipulated later
    const instance = new USDZInstance(inputFileName, this.usdModule, driver, renderInterface, targetGroup);
    return instance;
  }
}
