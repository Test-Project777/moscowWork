import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/auth';
import vacansysSlice from './slices/vacansy';
import categorySlice from './slices/category';

export const store = configureStore({
  reducer: {
    authSlice: authReducer,
    vacSlice: vacansysSlice,
    catSlice: categorySlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
