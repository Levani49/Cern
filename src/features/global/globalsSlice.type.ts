import type { ModelLoadingStates, selectedModel } from '../../types/app.types';

export interface GlobalsSlice {
  prefersDarkMode: boolean;
  startParticleAnimation: boolean;
  showStats: boolean;
  showAxis: boolean;
  showGrid: boolean;
  globalWireframe: boolean;
  modelsLoadingState: ModelLoadingStates;
  selectedModel: selectedModel;
  previousSelectedModel: selectedModel;
  globalOpacity: number;
}
