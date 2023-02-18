import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface ISettings {
  show: boolean;
}

const initialState: ISettings = {
  show: false,
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
     * The shape of the settings state.
     *
     * @param state
     * @typedef {object} SettingsState
     * @property {boolean} show - Whether the settings modal is shown or not.
     */
    openInfoModal: (state) => {
      state.show = true;
    },
    /**
     *
     * @param state
     */
    closeInfoModal: (state) => {
      state.show = false;
    },
  },
});

export default infoSlice.reducer;
export const { openInfoModal, closeInfoModal } = infoSlice.actions;

/**
 *
 * @param state
 */
export const selectInfoSettingsStatus = (state: RootState): boolean => state.info.show;
