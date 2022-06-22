import { RenderDelegateInterface } from './ThreeJsRenderDelegate';

declare class USDModule {
  FS: FS;
  ready: Promise<boolean>;
}

declare module USDModule {
  class HdWebSyncDriver {
    constructor(renderInterface: RenderDelegateInterface, inputFile: string);
    Draw(): void;
    SetTime(time: number): void;
    GetStage(): Stage;
  }
}
declare class FS {
  unlink(fileName: string): void;
  createDataFile(
    root: string,
    inputFileName: string,
    dataRaw: Uint8Array,
    canRead: boolean,
    canWrite: boolean,
    canOwn: boolean,
  ): void;
}

declare class Stage {
  GetEndTimeCode(): number;
  GetTimeCodesPerSecond(): number;
}
