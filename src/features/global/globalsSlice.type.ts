import type { ModelLoadingStates, selectedModel } from "#/types/app.types";

export type ModalOrder = {
  id: string;
  zIndex: number;
};

export interface GlobalsSlice {
  prefersdarkMode: boolean;
  startParticleAnimation: boolean;
  showStats: boolean;
  showAxis: boolean;
  showGrid: boolean;
  globalWireframe: boolean;
  modelsLoadingState: ModelLoadingStates;
  selectedModel: selectedModel;
  previousSelectedModel: selectedModel;
  globalOpacity: number;
  showSnapModal: boolean;
  showGeometryMenu: boolean;
  fullScreen: boolean;
  screenRecording: "idle" | "recording" | "stop";
  showMenu: boolean;
  showUtils: boolean;
  modals: {
    index: number;
    order: ModalOrder[];
  };
}
