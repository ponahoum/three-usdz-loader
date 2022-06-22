import { USDModule } from './USDModule';

export {};

declare global {
  interface Window {
    getUsdModule: (module: any, depPath: string | undefined) => Promise<USDModule>;
  }
}
