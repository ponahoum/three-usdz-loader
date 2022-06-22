import { USDModule } from './USDModule';

export class RenderDelegateInterface {
  constructor(inputFile: string, usdRoot: THREE.Group);
  setDriver(driver: USDModule.HdWebSyncDriver): void;
}
