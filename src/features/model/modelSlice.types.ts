import { Plane } from "three";

import { ModelCut, ModelLoadingStates, selectedModel } from "@type/app.types";

export interface ModelSlice {
  modelWireframe: boolean;
  modelCut: ModelCut;
  localCut: ModelCut;
  selectedModel: selectedModel;
  previousSelectedModel: selectedModel;
  modelsLoadingState: ModelLoadingStates;
  modelOpacity: number;
  showModelModal: boolean;
  clippingPlanesNormal: number;
  clippingPlanes: Plane[];
}
