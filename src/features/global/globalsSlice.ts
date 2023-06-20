import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "@store/store";

import type { GlobalsSlice } from "./globalsSlice.type";

const initialState: GlobalsSlice = {
  prefersDarkMode: true,
  startParticleAnimation: true,
  showStats: false,
  showAxis: true,
  showGrid: true,
  globalWireframe: false,
  selectedModel: null,
  modelsLoadingState: "loading",
  previousSelectedModel: null,
  globalOpacity: 1,
  showGeometryMenu: true,
  showSnapModal: false,
  fullScreen: false
};

const globalsSlice = createSlice({
  name: "globals",
  initialState,
  reducers: {
    rehydrate: (state, action) => {
      return action.payload.globals || state;
    },
    setSnapModal: (state, action: PayloadAction<boolean>) => {
      state.showSnapModal = action.payload;
    },
    setFullscreen: (state, action: PayloadAction<boolean>) => {
      state.fullScreen = action.payload;
    },
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
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },

    setParticleAnimationState: (state, action: PayloadAction<boolean>) => {
      state.startParticleAnimation = action.payload;
    }
  }
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
  setSnapModal,
  setFullscreen
} = globalsSlice.actions;

export const selectIsFullscreen = (state: RootState): boolean => state.globals.fullScreen;
export const selectSnapModal = (state: RootState): boolean => state.globals.showSnapModal;
export const selectTheme = (state: RootState): boolean => state.globals.prefersDarkMode;
export const selectStats = (state: RootState): boolean => state.globals.showStats;
export const selectAxis = (state: RootState): boolean => state.globals.showAxis;
export const selectGrid = (state: RootState): boolean => state.globals.showGrid;
export const selectGlobalWireframe = (state: RootState): boolean => state.globals.globalWireframe;
export const selectGlobalOpacity = (state: RootState): number => state.globals.globalOpacity;
export const selectParticleAnimation = (state: RootState): boolean =>
  state.globals.startParticleAnimation;
