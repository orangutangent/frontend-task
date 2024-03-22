import { configureStore } from "@reduxjs/toolkit";
import sortSlice from "./sortSlice";
import filterSlice from "./filterSlice";
import ticketSlice from "./ticketSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
  reducer: {
    sort: sortSlice,
    filter: filterSlice,
    tickets: ticketSlice,
    search: searchSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
