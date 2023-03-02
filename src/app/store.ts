import { configureStore, combineReducers } from "@reduxjs/toolkit";

import infoReducer from "../features/rendererSlice";
import cameraReducer from "../features/cameraSlice";
import modalsreducer from "../features/modalsSlice";
import globalsReducer from "../features/globalsSlice";

const rootReducer = combineReducers({
  globals: globalsReducer,
  renderer: infoReducer,
  camera: cameraReducer,
  modals: modalsreducer,
});

const store = configureStore({
  reducer: rootReducer,
  /**
   * Middleware function for Redux store configuration that disables serializable action checking.
   *
   * @function
   * @name getDefaultMiddleware
   * @param {object} getDefaultMiddleware - The default middleware provided by Redux.
   * @returns {Array} - An array of middleware functions to be used in the Redux store.
   */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
