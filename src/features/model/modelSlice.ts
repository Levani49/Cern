import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  showModelModal: false
};

const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    rehydrate: (state, action) => {
      return action.payload.model || state;
    },
    setModelModal: (state, action: PayloadAction<boolean>) => {
      state.showModelModal = action.payload;
    },
    setModelWireframe: (state, action: PayloadAction<boolean>) => {
      state.modelWireframe = action.payload;
    },
    setModelsOpacity: (state, action: PayloadAction<number>) => {
      state.modelOpacity = action.payload;
    },
    updateModelCut: (state, action: PayloadAction<ModelCut>) => {
      state.modelCut = action.payload;
    },
    updateLocalModelCut: (state, action: PayloadAction<ModelCut>) => {
      state.localCut = action.payload;
    },
    updateModelsLoadingState: (
      state,
      action: PayloadAction<ModelLoadingStates>
    ) => {
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
  updateLocalModelCut
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
export const selectModelsLoadingState = (
  state: RootState
): ModelLoadingStates => state.model.modelsLoadingState;

export const selectPreviousSelectedModel = (state: RootState): selectedModel =>
  state.model.previousSelectedModel;
