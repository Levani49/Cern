import { configureStore, combineReducers } from "@reduxjs/toolkit";

import settingsReducer from "../features/settingsSlice";
import infoReducer from "../features/infoSlice";
import cameraReducer from "../features/cameraSlice";
import droneReducer from "../features/droneSlice";

const rootReducer = combineReducers({
  settings: settingsReducer,
  info: infoReducer,
  camera: cameraReducer,
  drone: droneReducer,
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
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
