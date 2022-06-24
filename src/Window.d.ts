import { USDModule } from './USDModule';

export {};

declare global {
  interface Window {
    getUsdModule: (
      module: any,
      depPath: string | undefined,
      maxSupportedMemoryGrowth: number | undefined,
    ) => Promise<USDModule>;
  }
}
