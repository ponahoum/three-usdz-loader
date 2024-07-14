import { RenderDelegateInterface } from './ThreeJsRenderDelegate';
import { USDModule } from './USDModule';
import * as THREE from 'three';

/**
 * Represents a model loaded by the USDZLoader and handles its lifecycle in the THREE context
 */
export class USDZInstance {
  driver: USDModule.HdWebSyncDriver;
  renderInterface: RenderDelegateInterface;
  fileName: string;
  usdModule: USDModule;
  targetGroup: THREE.Group;

  // Animations
  private timeout = 40;
  private endTimecode = 1;

  constructor(
    fileName: string,
    usdModule: USDModule,
    driver: USDModule.HdWebSyncDriver,
    renderInterface: RenderDelegateInterface,
    targetGroup: THREE.Group,
  ) {
    this.driver = driver;
    this.targetGroup = targetGroup;
    this.usdModule = usdModule;
    this.renderInterface = renderInterface;
    this.fileName = fileName;
    const stage = this.driver.GetStage();
    this.endTimecode = stage.GetEndTimeCode();
    this.timeout = 1000 / stage.GetTimeCodesPerSecond();
  }

  /**
   * Returns the USDz instance container
   */
  getGroup(): THREE.Group {
    return this.targetGroup;
  }

  /**
   * If there are some animations on this model, call this function to call the update loop of the animation
   * A time that evolves must be given for the animation to update
   */
  update(seconds: number): void {
    const time = (seconds * (1000 / this.timeout)) % this.endTimecode;
    this.driver.SetTime(time);
    this.driver.Draw();
  }

  /**
   * Destroys the associated THREE.Group and unlink the data from the usd module driver
   */
  clear(): void {
    this.targetGroup.clear();
    this.usdModule.FS.unlink(this.fileName);
  }
}
