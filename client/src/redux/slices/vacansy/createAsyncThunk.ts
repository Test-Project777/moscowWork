import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiVacansyService from '../../../services/apiVacansyService';

// eslint-disable-next-line import/prefer-default-export
export const thunkLoadVacansy = createAsyncThunk('vacansysSlice/thunkLoadVacansy', async () =>
  ApiVacansyService.getVacansy(),
);
