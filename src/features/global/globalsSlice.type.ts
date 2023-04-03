import type { ModelCut, ModelLoadingStates, selectedModel } from '../../types/app.types';

export interface GlobalsSlice {
  prefersDarkMode: boolean;
  startParticleAnimation: boolean;
  showStats: boolean;
  showAxis: boolean;
  showGrid: boolean;
  modelWireframe: boolean;
  globalWireframe: boolean;
  modelCut: ModelCut;
  modelsLoadingState: ModelLoadingStates;
  selectedModel: selectedModel;
  previousSelectedModel: selectedModel;
  modelOpacity: number;
  globalOpacity: number;
}
