import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiVacansyService from '../../../services/apiVacansyService';
import type { AddVacancyFormData } from '../../../type/vacansy';

// eslint-disable-next-line import/prefer-default-export
export const thunkLoadVacansy = createAsyncThunk('vacansysSlice/thunkLoadVacansy', async () =>
  ApiVacansyService.getVacansy(),
);

export const thunkAddVacancy = createAsyncThunk(
  'vacancySlice/thunkAddVacancy',
  async (data: AddVacancyFormData) => {
    const vacancy = await ApiVacansyService.addVacansy(data);
    return vacancy;
  },
);
