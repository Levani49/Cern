import type { ModelCut, selectedModel } from "@type/app.types";

export interface UseSelectedModel {
  selectedModel: selectedModel;
  modelOpacityLevel: number;
  globalOpacityLevel: number;
  modelWireframe: boolean;
  globalWireframe: boolean;
  cutType: ModelCut;
}
