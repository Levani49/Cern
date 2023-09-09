import { combineReducers, configureStore } from "@reduxjs/toolkit";

import cameraReducer from "#/store/features/cameraSlice";
import eventReducer from "#/store/features/eventSlice";
import globalsReducer from "#/store/features/globalsSlice";
import modalsreducer from "#/store/features/modalSlice";
import modelReducer from "#/store/features/modelSlice";
import infoReducer from "#/store/features/rendererSlice";
import treeReducer from "#/store/features/treeSlice";

const combinedReducers = {
  globals: globalsReducer,
  renderer: infoReducer,
  camera: cameraReducer,
  modal: modalsreducer,
  tree: treeReducer,
  model: modelReducer,
  event: eventReducer,
};

export const rootReducer = combineReducers(combinedReducers);

const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.VITE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
