import { configureStore, combineReducers } from "@reduxjs/toolkit";

import settingsReducer from "../features/settingsSlice";
import infoReducer from "../features/infoSlice";

const rootReducer = combineReducers({ settings: settingsReducer, info: infoReducer });

const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
