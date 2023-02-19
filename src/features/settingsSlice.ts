import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../app/app.types";

interface ISettings {
  show: boolean;
}

const initialState: ISettings = {
  show: false,
};

/**
 * A Redux slice that manages the state of the settings.
 *
 * @module settingsSlice
 */
export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    /**
     * The shape of the settings state.
     *
     * @param state
     * @typedef {object} SettingsState
     * @property {boolean} show - Whether the settings modal is shown or not.
     */
    openSettingsModal: (state) => {
      state.show = true;
    },
    /**
     *
     * @param state
     */
    closeSettingsModal: (state) => {
      state.show = false;
    },
  },
});

export const { openSettingsModal, closeSettingsModal } = settingsSlice.actions;
export default settingsSlice.reducer;

/**
 *
 * @param state
 */
export const selectShowSettingsStatus = (state: RootState): boolean => state.settings.show;
