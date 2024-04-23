import { configureStore } from "@reduxjs/toolkit";
import { personajeSlice } from "../features/rickandSlice";
import { RickandApi } from "../apis/RickandApi";
import { infoSlice } from "../features/infoSlice";

export const store = configureStore({
  reducer: {
    [RickandApi.reducerPath]: RickandApi.reducer,
    info: infoSlice.reducer,
    personajes: personajeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(RickandApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
