import { configureStore, combineReducers } from "@reduxjs/toolkit";

import settingsReducer from "../features/settingsSlice";
import infoReducer from "../features/infoSlice";
import cameraReducer from "../features/cameraSlice";

const rootReducer = combineReducers({ settings: settingsReducer, info: infoReducer, camera: cameraReducer });

const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
