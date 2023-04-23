import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../app/store';
import type { CurrentAnalysisTool } from '../../types/app.types';
import type { Modal } from './modalSlice.types';

const initialState: Modal = {
  aboutModalIsOpen: false,
  settingsModalIsOpen: false,
  eventsModalIsOpen: false,
  events: {
    analysisTools: {
      currentTool: 'info',
    },
  },
};

/**
 * Redux slice for managing modal state.
 *
 * @typedef {object} ModalsSlice
 * @property {boolean} aboutModalIsOpen - Whether the about modal is currently open.
 * @property {boolean} settingsModalIsOpen - Whether the settings modal is currently open.
 * @property {boolean} eventsModalIsOpen - Whether the events modal is currently open.
 */
export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    /**
     * Sets the state of the about modal.
     *
     * @param {ModalsSlice} state - The current state of the modals slice.
     * @param {PayloadAction<boolean>} action - The action to update the state of the about modal.
     */
    showAboutModal: (state, action: PayloadAction<boolean>) => {
      state.aboutModalIsOpen = action.payload;
    },
    /**
     * Sets the state of the settings modal.
     *
     * @param {ModalsSlice} state - The current state of the modals slice.
     * @param {PayloadAction<boolean>} action - The action to update the state of the settings modal.
     */
    showSettingsModal: (state, action: PayloadAction<boolean>) => {
      state.settingsModalIsOpen = action.payload;
    },
    /**
     * Sets the state of the events modal.
     *
     * @param {ModalsSlice} state - The current state of the modals slice.
     * @param {PayloadAction<boolean>} action - The action to update the state of the events modal.
     */
    showEventsModal: (state, action: PayloadAction<boolean>) => {
      state.eventsModalIsOpen = action.payload;
    },

    /**
     *
     * @param state
     * @param action
     */
    setEventCurrentAnalysisTool: (state, action: PayloadAction<CurrentAnalysisTool>) => {
      state.events.analysisTools.currentTool = action.payload;
    },
  },
});

export default modalsSlice.reducer;

export const { showSettingsModal, showAboutModal, showEventsModal, setEventCurrentAnalysisTool } =
  modalsSlice.actions;

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
export const selectAboutModalState = (state: RootState): boolean => state.modal.aboutModalIsOpen;

/**
 * Selects the state of the events modal from the Redux store.
 *
 * @param {RootState} state - The current state of the Redux store.
 * @returns {boolean} - Whether the events modal is currently open.
 */
export const selectEventsModalState = (state: RootState): boolean => state.modal.eventsModalIsOpen;

/**
 *
 * @param state
 */
export const selectCurrentEventAnalysisTool = (state: RootState): CurrentAnalysisTool =>
  state.modal.events.analysisTools.currentTool;
