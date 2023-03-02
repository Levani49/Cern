import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/app.types";

interface GlobalsSlice {
  prefersDarkMode: boolean;
}

const initialState: GlobalsSlice = {
  prefersDarkMode: false,
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
  },
});

export default globalsSlice.reducer;
export const { setDarkMode } = globalsSlice.actions;

/**
 *
 * @param state
 */
export const selectDarkModeState = (state: RootState): boolean =>
  state.globals.prefersDarkMode;
