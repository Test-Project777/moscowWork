import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { VacancyType, VacansysState } from '../../../type/vacansy';
import { thunkLoadVacansy } from './createAsyncThunk';

const initialState: VacansysState = {
  vacancy: [],
  selectedVacansy: null,
};

export const vacansysSlice = createSlice({
  name: 'vacansySlice',
  initialState,
  reducers: {
    setSelectedVacansys: (state, action: PayloadAction<VacancyType>) => {
      state.selectedVacansy = action.payload;
    },
    clearSelectedVacansys: (state) => {
      state.selectedVacansy = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkLoadVacansy.fulfilled, (state, action) => {
      state.vacancy = action.payload;
    });
  },
});

export const { setSelectedVacansys, clearSelectedVacansys } = vacansysSlice.actions;

export default vacansysSlice.reducer;
