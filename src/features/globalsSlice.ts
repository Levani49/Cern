import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/app.types";

interface GlobalsSlice {
  prefersDarkMode: boolean;
  startParticleAnimation: boolean;
}

const initialState: GlobalsSlice = {
  prefersDarkMode: true,
  startParticleAnimation: true,
};

const globalsSlice = createSlice({
  name: "globals",
  initialState,
  reducers: {
    /**
     *
     * @param state
     * @param action
     */
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.prefersDarkMode = action.payload;
      if (action.payload) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },

    /**
     *
     * @param state
     * @param action
     */
    setParticleAnimationState: (state, action: PayloadAction<boolean>) => {
      state.startParticleAnimation = action.payload;
    },
  },
});

export default globalsSlice.reducer;
export const { setDarkMode, setParticleAnimationState } = globalsSlice.actions;

/**
 *
 * @param state
 */
export const selectDarkModeState = (state: RootState): boolean =>
  state.globals.prefersDarkMode;

/**
 *
 * @param state
 */
export const selectParticleAnimationState = (state: RootState): boolean =>
  state.globals.startParticleAnimation;
