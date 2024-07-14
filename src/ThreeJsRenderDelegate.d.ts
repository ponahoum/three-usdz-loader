import { USDModule } from './USDModule';
import * as THREE from 'three';

export class RenderDelegateInterface {
  constructor(inputFile: string, usdRoot: THREE.Group);
  setDriver(driver: USDModule.HdWebSyncDriver): void;
}
