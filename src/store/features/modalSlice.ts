import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { CurrentAnalysisTool, Modal, RootState } from "#/types/app.types";

const initialState: Modal = {
  aboutModalIsOpen: false,
  settingsModalIsOpen: false,
  eventsModalIsOpen: false,
  events: {
    analysisTools: {
      currentTool: "info",
    },
  },
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    rehydrate: (state, action) => {
      return action.payload.modals || state;
    },
    showAboutModal: (state, action: PayloadAction<boolean>) => {
      state.aboutModalIsOpen = action.payload;
    },

    showSettingsModal: (state, action: PayloadAction<boolean>) => {
      state.settingsModalIsOpen = action.payload;
    },

    showEventsModal: (state, action: PayloadAction<boolean>) => {
      state.eventsModalIsOpen = action.payload;
    },

    setEventCurrentAnalysisTool: (
      state,
      action: PayloadAction<CurrentAnalysisTool>
    ) => {
      state.events.analysisTools.currentTool = action.payload;
    },
  },
});

export default modalsSlice.reducer;

export const {
  showSettingsModal,
  showAboutModal,
  showEventsModal,
  setEventCurrentAnalysisTool,
} = modalsSlice.actions;

/**
 * Selects the state of the settings modal from the Redux store.
 *
 * @param {RootState} state - The current state of the Redux store.
 * @returns {boolean} - Whether the settings modal is currently open.
 */
export const selectSettingsModalState = (state: RootState): boolean =>
  state.modal.settingsModalIsOpen;

/**
 * Selects the state of the about modal from the Redux store.
 *
 * @param {RootState} state - The current state of the Redux store.
 * @returns {boolean} - Whether the about modal is currently open.
 */
export const selectAboutModalState = (state: RootState): boolean =>
  state.modal.aboutModalIsOpen;

/**
 * Selects the state of the events modal from the Redux store.
 *
 * @param {RootState} state - The current state of the Redux store.
 * @returns {boolean} - Whether the events modal is currently open.
 */
export const selectEventsModalState = (state: RootState): boolean =>
  state.modal.eventsModalIsOpen;

/**
 *
 * @param state
 */
export const selectCurrentEventAnalysisTool = (
  state: RootState
): CurrentAnalysisTool => state.modal.events.analysisTools.currentTool;
