import { configureStore } from "@reduxjs/toolkit";
import selectedCitySlice from "../features/selectedCitySlice";
import unitSlice from "../features/unit/unitSlice";
// ...

export const store = configureStore({
  reducer: {
    unit: unitSlice,
    selectedCity: selectedCitySlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
