import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiCategoryService from '../../../services/apiCategoryService';

// eslint-disable-next-line import/prefer-default-export
export const thunkLoadCategories = createAsyncThunk(
  'categoriessSlice/thunkLoadCategories',
  async () => ApiCategoryService.getCategory(),
);
