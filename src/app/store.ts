import { configureStore, combineReducers } from '@reduxjs/toolkit';

import infoReducer from '../features/renderer/rendererSlice';
import cameraReducer from '../features/camera/cameraSlice';
import modalsreducer from '../features/modals/modalsSlice';
import globalsReducer from '../features/global/globalsSlice';
import treeReducer from '../features/tree/treeSlice';
import modelReducer from '../features/model/modelSlice';
import eventsReducer from '../features/events/eventsSlice';

const rootReducer = combineReducers({
  globals: globalsReducer,
  renderer: infoReducer,
  camera: cameraReducer,
  modals: modalsreducer,
  tree: treeReducer,
  model: modelReducer,
  events: eventsReducer,
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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
