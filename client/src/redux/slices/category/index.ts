import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { thunkLoadCategories } from './createAsyncThunk';
import type { CategoryState, CategoryType } from '../../../type/categorys';

const initialState: CategoryState = {
  categories: [],
  selectedCategories: null,
};

export const categorySlice = createSlice({
  name: 'categorylice',
  initialState,
  reducers: {
    setSelectedcategory: (state, action: PayloadAction<CategoryType>) => {
      state.selectedCategories = action.payload;
    },
    clearSelectedcategory: (state) => {
      state.selectedCategories = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkLoadCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const { setSelectedcategory, clearSelectedcategory } = categorySlice.actions;

export default categorySlice.reducer;
