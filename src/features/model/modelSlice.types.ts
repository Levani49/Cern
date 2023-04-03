import { ModelCut, selectedModel, ModelLoadingStates } from '../../types/app.types';

export interface ModelSlice {
  modelWireframe: boolean;
  modelCut: ModelCut;
  selectedModel: selectedModel;
  previousSelectedModel: selectedModel;
  modelsLoadingState: ModelLoadingStates;
  modelOpacity: number;
  showModelModal: boolean;
}
