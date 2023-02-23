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
   *
   * @param getDefaultMiddleware
   */
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
