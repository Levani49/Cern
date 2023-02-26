import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../app/app.types";

interface RendererInfo {
  show: boolean;
  showStats: boolean;
  showAxis: boolean;
  renderer: {
    triangles: number;
    fps: number;
    memory: number;
  };
}

type RendererType = RendererInfo["renderer"];

const initialState: RendererInfo = {
  show: false,
  showStats: true,
  showAxis: true,
  renderer: {
    triangles: 0,
    fps: 0,
    memory: 0,
  },
};

/**
 * A Redux slice that manages the state of the info.
 *
 * @module infoSlice
 */
export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    /**
     *
     * @param state
     * @param action
     */
    showRendererStats: (state, action: PayloadAction<boolean>) => {
      state.showStats = action.payload;
    },

    /**
     *
     * @param state
     * @param action
     */
    showAxis: (state, action: PayloadAction<boolean>) => {
      state.showAxis = action.payload;
    },

    /**
     *
     * @param state
     * @param action
     */
    setRendererStats: (state, action: PayloadAction<RendererType>) => {
      state.renderer = {
        ...state.renderer,
        ...action.payload,
      };
    },
  },
});

export default infoSlice.reducer;
export const { setRendererStats, showRendererStats, showAxis } =
  infoSlice.actions;

/**
 *
 * @param state
 */
export const selectInfoSettingsStatus = (state: RootState): boolean =>
  state.info.show;

/**
 *
 * @param state
 */
export const selectRendererStats = (state: RootState): RendererType =>
  state.info.renderer;

/**
 *
 * @param state
 */
export const selectRendererStatsState = (state: RootState): boolean =>
  state.info.showStats;

/**
 *
 * @param state
 */
export const selectRendererAxisState = (state: RootState): boolean =>
  state.info.showAxis;
