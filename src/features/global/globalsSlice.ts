import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../app/store';
import type { GlobalsSlice } from './globalsSlice.type';

const initialState: GlobalsSlice = {
  prefersDarkMode: true,
  startParticleAnimation: true,
  showStats: false,
  showAxis: true,
  showGrid: true,
  globalWireframe: false,
  selectedModel: null,
  modelsLoadingState: 'loading',
  previousSelectedModel: null,
  globalOpacity: 1,
};

const globalsSlice = createSlice({
  name: 'globals',
  initialState,
  reducers: {
    setGlobalWireframe: (state, action: PayloadAction<boolean>) => {
      state.globalWireframe = action.payload;
    },
    setGlobalOpacity: (state, action: PayloadAction<number>) => {
      state.globalOpacity = action.payload;
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
  setGlobalOpacity,
  setGlobalWireframe,
} = globalsSlice.actions;

export const selectTheme = (state: RootState): boolean =>
  state.globals.prefersDarkMode;
export const selectStats = (state: RootState): boolean =>
  state.globals.showStats;
export const selectAxis = (state: RootState): boolean => state.globals.showAxis;
export const selectGrid = (state: RootState): boolean => state.globals.showGrid;
export const selectGlobalWireframe = (state: RootState): boolean =>
  state.globals.globalWireframe;
export const selectGlobalOpacity = (state: RootState): number =>
  state.globals.globalOpacity;
export const selectParticleAnimation = (state: RootState): boolean =>
  state.globals.startParticleAnimation;
