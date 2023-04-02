import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../app/store';
import type { GlobalsSlice } from './globalsSlice.type';
import { ModelCut, ModelLoadingStates, selectedModel } from '../../types/app.types';

const initialState: GlobalsSlice = {
  prefersDarkMode: true,
  startParticleAnimation: true,
  showStats: false,
  showAxis: true,
  showGrid: true,
  modelWireframe: false,
  globalWireframe: false,
  selectedModel: null,
  modelCut: '-cut3',
  modelsLoadingState: 'loading',
  previousSelectedModel: null,
  modelOpacity: 1,
  globalOpacity: 1,
};

const globalsSlice = createSlice({
  name: 'globals',
  initialState,
  reducers: {
    setModelWireframe: (state, action: PayloadAction<boolean>) => {
      state.modelWireframe = action.payload;
    },
    setGlobalWireframe: (state, action: PayloadAction<boolean>) => {
      state.globalWireframe = action.payload;
    },
    setGlobalOpacity: (state, action: PayloadAction<number>) => {
      state.globalOpacity = action.payload;
    },
    setModelsOpacity: (state, action: PayloadAction<number>) => {
      state.modelOpacity = action.payload;
    },
    setSelectedModel: (state, action: PayloadAction<selectedModel>) => {
      if (action.payload === null) {
        state.previousSelectedModel = state.selectedModel;
        state.selectedModel = action.payload;
      } else {
        state.selectedModel = action.payload;
      }
    },
    updateModelCut: (state, action: PayloadAction<ModelCut>) => {
      state.modelCut = action.payload;
    },
    updateLoadingState: (state, action: PayloadAction<ModelLoadingStates>) => {
      state.modelsLoadingState = action.payload;
    },
    showRendererStats: (state, action: PayloadAction<boolean>) => {
      state.showStats = action.payload;
    },

    showAxis: (state, action: PayloadAction<boolean>) => {
      state.showAxis = action.payload;
    },

    showGrid: (state, action: PayloadAction<boolean>) => {
      state.showGrid = action.payload;
    },

    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.prefersDarkMode = action.payload;
      if (action.payload) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },

    setParticleAnimationState: (state, action: PayloadAction<boolean>) => {
      state.startParticleAnimation = action.payload;
    },
  },
});

export default globalsSlice.reducer;

export const {
  setDarkMode,
  setParticleAnimationState,
  showRendererStats,
  showAxis,
  showGrid,
  updateLoadingState,
  updateModelCut,
  setSelectedModel,
  setModelsOpacity,
  setGlobalOpacity,
  setModelWireframe,
  setGlobalWireframe,
} = globalsSlice.actions;

export const selectTheme = (state: RootState): boolean => state.globals.prefersDarkMode;
export const selectStats = (state: RootState): boolean => state.globals.showStats;
export const selectAxis = (state: RootState): boolean => state.globals.showAxis;
export const selectGrid = (state: RootState): boolean => state.globals.showGrid;
export const selectSelectedModel = (state: RootState): selectedModel => state.globals.selectedModel;
export const selectModelsOpacity = (state: RootState): number => state.globals.modelOpacity;
export const selectGlobalOpacity = (state: RootState): number => state.globals.globalOpacity;
export const selectModelWireframe = (state: RootState): boolean => state.globals.modelWireframe;
export const selectGlobalWireframe = (state: RootState): boolean => state.globals.globalWireframe;
export const selectGeometriesCutType = (state: RootState): ModelCut => state.globals.modelCut;

export const selectLoadingState = (state: RootState): ModelLoadingStates =>
  state.globals.modelsLoadingState;

export const selectParticleAnimation = (state: RootState): boolean =>
  state.globals.startParticleAnimation;

export const selectPreviousSelectedModel = (state: RootState): selectedModel =>
  state.globals.previousSelectedModel;
