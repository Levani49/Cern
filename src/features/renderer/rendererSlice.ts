import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../app/store';
import type { RendererInfo, RendererType } from './rendererSlice.types';

const initialState: RendererInfo = {
  show: false,
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
  name: 'info',
  initialState,
  reducers: {
    rehydrate: (state, action) => {
      return action.payload.info || state;
    },
    setRendererStats: (state, action: PayloadAction<RendererType>) => {
      state.renderer = {
        ...state.renderer,
        ...action.payload,
      };
    },
  },
});

export default infoSlice.reducer;
export const { setRendererStats } = infoSlice.actions;
export const selectInfoSettingsStatus = (state: RootState): boolean => state.renderer.show;
export const selectRendererStats = (state: RootState): RendererType => state.renderer.renderer;
