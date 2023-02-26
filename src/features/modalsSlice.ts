import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/app.types";

interface Modals {
  aboutModalIsOpen: boolean;
  settingsModalIsOpen: boolean;
}

const initialState: Modals = {
  aboutModalIsOpen: false,
  settingsModalIsOpen: false,
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    /**
     *
     * @param state
     * @param action
     */
    showAboutModal: (state, action: PayloadAction<boolean>) => {
      state.aboutModalIsOpen = action.payload;
    },
    /**
     *
     * @param state
     * @param action
     */
    showSettingsModal: (state, action: PayloadAction<boolean>) => {
      state.settingsModalIsOpen = action.payload;
    },
  },
});

export default modalsSlice.reducer;

export const { showSettingsModal, showAboutModal } = modalsSlice.actions;

/**
 *
 * @param state
 */
export const selectSettingsModalState = (state: RootState): boolean =>
  state.modals.settingsModalIsOpen;
/**
 *
 * @param state
 */
export const selectAboutModalState = (state: RootState): boolean =>
  state.modals.aboutModalIsOpen;
