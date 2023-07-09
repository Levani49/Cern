import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Plane, Vector3 } from "three";

import { ModelCut, ModelLoadingStates, selectedModel } from "@type/app.types";

import type { RootState } from "@store/store";

import type { ModelSlice } from "./modelSlice.types";

const initialState: ModelSlice = {
  modelWireframe: false,
  selectedModel: null,
  modelCut: "-cut3",
  localCut: "-cut3",
  modelsLoadingState: "loading",
  previousSelectedModel: null,
  modelOpacity: 1,
  showModelModal: false,
  clippingPlanesNormal: 3.14159265,
  clippingPlanes: [
    new Plane(new Vector3(1, 0, 0), 0),
    new Plane(new Vector3(-1, 0, 0), 0)
  ],
  snapIsLoading: false
};

const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    rehydrate: (state, action) => {
      return action.payload.model || state;
    },
    hydrateClippingPlanes: (state) => {
      if (state.clippingPlanesNormal > 3.14139264) {
        state.clippingPlanes[0].normal = new Vector3(
          -1 * Math.cos(Math.PI),
          -1 * Math.sin(Math.PI),
          0
        );
      } else {
        state.clippingPlanes[0].normal = new Vector3(
          -1 * Math.cos(state.clippingPlanesNormal),
          -1 * Math.sin(state.clippingPlanesNormal),
          0
        );
      }
    },

    setClippingPlanesNormal: (state, action: PayloadAction<number>) => {
      state.clippingPlanesNormal = action.payload;
      if (action.payload > 3.14139264) {
        state.clippingPlanes[0].normal = new Vector3(
          -1 * Math.cos(Math.PI),
          -1 * Math.sin(Math.PI),
          0
        );
      } else {
        state.clippingPlanes[0].normal = new Vector3(
          -1 * Math.cos(state.clippingPlanesNormal),
          -1 * Math.sin(state.clippingPlanesNormal),
          0
        );
      }
    },
    setSnapIsLoading: (state, action: PayloadAction<boolean>) => {
      state.snapIsLoading = action.payload;
    },
    setModelModal: (state, action: PayloadAction<boolean>) => {
      state.showModelModal = action.payload;
    },
    setModelWireframe: (state, action: PayloadAction<boolean>) => {
      state.modelWireframe = action.payload;
      if (state.selectedModel) {
        state.selectedModel = {
          ...state.selectedModel,
          wireframe: action.payload
        };
      }
    },
    setModelsOpacity: (state, action: PayloadAction<number>) => {
      state.modelOpacity = action.payload;
      if (state.selectedModel) {
        state.selectedModel = {
          ...state.selectedModel,
          opacity: action.payload
        };
      }
    },
    updateModelCut: (state, action: PayloadAction<ModelCut>) => {
      state.modelCut = action.payload;
      if (state.selectedModel) {
        state.selectedModel = {
          ...state.selectedModel,
          cutType: action.payload
        };

        state.localCut = action.payload;
      }
    },
    updateLocalModelCut: (state, action: PayloadAction<ModelCut>) => {
      state.localCut = action.payload;
      if (state.selectedModel) {
        state.selectedModel = {
          ...state.selectedModel,
          cutType: action.payload
        };
      }
    },
    updateModelsLoadingState: (state, action: PayloadAction<ModelLoadingStates>) => {
      state.modelsLoadingState = action.payload;
    },
    setSelectedModel: (state, action: PayloadAction<selectedModel>) => {
      if (action.payload === null) {
        state.previousSelectedModel = state.selectedModel;
        state.selectedModel = null;
        state.showModelModal = false;
      } else {
        state.selectedModel = action.payload;
        state.showModelModal = true;
      }
    }
  }
});

export default modelSlice.reducer;

export const {
  updateModelsLoadingState,
  updateModelCut,
  setSelectedModel,
  setModelsOpacity,
  setModelWireframe,
  setModelModal,
  updateLocalModelCut,
  setClippingPlanesNormal,
  hydrateClippingPlanes,
  setSnapIsLoading
} = modelSlice.actions;

export const selectSelectedModel = (state: RootState): selectedModel =>
  state.model.selectedModel;
export const selectModelsOpacity = (state: RootState): number =>
  state.model.modelOpacity;
export const selectModelWireframe = (state: RootState): boolean =>
  state.model.modelWireframe;
export const selectGeometriesCutType = (state: RootState): ModelCut =>
  state.model.modelCut;
export const selectLocalGeometryCutType = (state: RootState): ModelCut =>
  state.model.localCut;
export const selectModelModal = (state: RootState): boolean =>
  state.model.showModelModal;
export const selectModelsLoadingState = (state: RootState): ModelLoadingStates =>
  state.model.modelsLoadingState;

export const selectPreviousSelectedModel = (state: RootState): selectedModel =>
  state.model.previousSelectedModel;
export const selectClippingPlanesNormal = (state: RootState): number =>
  state.model.clippingPlanesNormal;

export const selectClippingPlanes = (
  state: RootState
): ModelSlice["clippingPlanes"] => state.model.clippingPlanes;

export const selectSnapIsLoading = (state: RootState): boolean =>
  state.model.snapIsLoading;
