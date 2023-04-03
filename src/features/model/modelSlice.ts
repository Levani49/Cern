import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../app/store';
import type { ModelSlice } from './modelSlice.types';
import { ModelCut, ModelLoadingStates, selectedModel } from '../../types/app.types';

const initialState: ModelSlice = {
  modelWireframe: false,
  selectedModel: null,
  modelCut: '-cut3',
  modelsLoadingState: 'loading',
  previousSelectedModel: null,
  modelOpacity: 1,
};

const modelSlice = createSlice({
  name: 'model',
  initialState,
  reducers: {
    setModelWireframe: (state, action: PayloadAction<boolean>) => {
      state.modelWireframe = action.payload;
    },
    setModelsOpacity: (state, action: PayloadAction<number>) => {
      state.modelOpacity = action.payload;
    },
    updateModelCut: (state, action: PayloadAction<ModelCut>) => {
      state.modelCut = action.payload;
    },
    updateModelsLoadingState: (state, action: PayloadAction<ModelLoadingStates>) => {
      state.modelsLoadingState = action.payload;
    },
    setSelectedModel: (state, action: PayloadAction<selectedModel>) => {
      if (action.payload === null) {
        state.previousSelectedModel = state.selectedModel;
        state.selectedModel = action.payload;
      } else {
        state.selectedModel = action.payload;
      }
    },
  },
});

export default modelSlice.reducer;

export const {
  updateModelsLoadingState,
  updateModelCut,
  setSelectedModel,
  setModelsOpacity,
  setModelWireframe,
} = modelSlice.actions;

export const selectSelectedModel = (state: RootState): selectedModel => state.model.selectedModel;
export const selectModelsOpacity = (state: RootState): number => state.model.modelOpacity;
export const selectModelWireframe = (state: RootState): boolean => state.model.modelWireframe;
export const selectGeometriesCutType = (state: RootState): ModelCut => state.model.modelCut;

export const selectModelsLoadingState = (state: RootState): ModelLoadingStates =>
  state.model.modelsLoadingState;

export const selectPreviousSelectedModel = (state: RootState): selectedModel =>
  state.model.previousSelectedModel;
