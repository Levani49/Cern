import { combineReducers, configureStore } from "@reduxjs/toolkit";

import cameraReducer from "@features/camera/cameraSlice";
import eventReducer from "@features/event/eventSlice";
import globalsReducer from "@features/global/globalsSlice";
import modalsreducer from "@features/modal/modalSlice";
import modelReducer from "@features/model/modelSlice";
import infoReducer from "@features/renderer/rendererSlice";
import treeReducer from "@features/tree/treeSlice";

const combinedReducers = {
  globals: globalsReducer,
  renderer: infoReducer,
  camera: cameraReducer,
  modal: modalsreducer,
  tree: treeReducer,
  model: modelReducer,
  event: eventReducer
};

export const rootReducer = combineReducers(combinedReducers);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
