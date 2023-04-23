import type { ModelCut, selectedModel } from '../../types/app.types';

export interface UseSelectedModel {
  selectedModel: selectedModel;
  modelOpacityLevel: number;
  globalOpacityLevel: number;
  modelWireframe: boolean;
  globalWireframe: boolean;
  cutType: ModelCut;
}
