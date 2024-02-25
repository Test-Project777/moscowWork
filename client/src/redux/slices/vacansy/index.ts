import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { VacancyType, VacansysState } from '../../../type/vacansy';
import { thunkAddVacancy, thunkLoadVacansy } from './createAsyncThunk';

const initialState: VacansysState = {
  vacancy: [],
  selectedVacansy: null,
  sortObrazovanieNet: [],
  sortObrazovanieSrednee: [],
  sortObrazovanieVyshee: [],
  sortPrice40k: [],
  sortPrice80K: [],
  sortPrice100K: [],
  sortPrice120K: [],
  sortPrice150K: [],
  sortPriceBolee150K: [],
  sortOpytRabNet: [],
  sortOpytRab1_3: [],
  sortOpytRab3_6: [],
  sortOpytRabBolee6: [],

  allVacans: [],
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
    sortObrazovanieNet: (state) => {
      state.vacancy = state.allVacans.filter((v) => v.education === 'Нет');
    },
    sortObazovanieSrednee: (state) => {
      state.vacancy = state.allVacans.filter((v) => v.education === 'Среднее');
    },
    sortObazovanieVishee: (state) => {
      state.vacancy = state.allVacans.filter((v) => v.education === 'Высшее');
    },
    allVacans: (state) => {
      state.vacancy = state.allVacans;
    },
    sortPrice40k: (state) => {
      state.vacancy = state.allVacans.filter((v) => Number(v.price) <= Number('40000'));
    },
    sortPrice80k: (state) => {
      state.vacancy = state.allVacans.filter((v) => Number(v.price) <= Number('80000'));
    },
    sortPrice100k: (state) => {
      state.vacancy = state.allVacans.filter((v) => Number(v.price) <= Number('100000'));
    },
    sortPrice120k: (state) => {
      state.vacancy = state.allVacans.filter((v) => Number(v.price) <= Number('120000'));
    },
    sortPrice150k: (state) => {
      state.vacancy = state.allVacans.filter((v) => Number(v.price) <= Number('150000'));
    },
    sortPriceBolee150k: (state) => {
      state.vacancy = state.allVacans.filter((v) => Number(v.price) >= Number('150000'));
    },
    sortOpytRabNet: (state) => {
      state.vacancy = state.allVacans.filter((v) => v.expireance === 'нет');
    },
    sortOpytRab13: (state) => {
      state.vacancy = state.allVacans.filter((v) => v.expireance === '1-3 лет');
    },
    sortOpytRab36: (state) => {
      state.vacancy = state.allVacans.filter((v) => v.expireance === '3-6 лет');
    },
    sortOpytRabBolee6: (state) => {
      state.vacancy = state.allVacans.filter((v) => v.expireance === 'более 6 лет');
    },
    sortGraphJobPolnaya: (state) => {
      state.vacancy = state.allVacans.filter((v) => v.format === 'Полная занятость');
    },
    sortGraphJobOVahta: (state) => {
      state.vacancy = state.allVacans.filter((v) => v.format === 'Вахтовый метод');
    },
    sortGraphJobGibrid: (state) => {
      state.vacancy = state.allVacans.filter((v) => v.format === 'Гибкий график');
    },
    sortGraphJobUdal: (state) => {
      state.vacancy = state.allVacans.filter((v) => v.format === 'Удаленная работа');
    },
    sortGraphJobSmena: (state) => {
      state.vacancy = state.allVacans.filter((v) => v.format === 'Сменный график');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkLoadVacansy.fulfilled, (state, action) => {
      state.vacancy = action.payload;
      state.allVacans = action.payload;
    });
    builder.addCase(thunkAddVacancy.fulfilled, (state, action) => {
      state.vacancy.push(action.payload);
    });
  },
});

export const {
  setSelectedVacansys,
  clearSelectedVacansys,
  sortObrazovanieNet,
  sortObazovanieSrednee,
  sortObazovanieVishee,
  allVacans,
  sortPrice40k,
  sortPrice80k,
  sortPrice100k,
  sortPrice120k,
  sortPrice150k,
  sortPriceBolee150k,
  sortOpytRab13,
  sortOpytRab36,
  sortOpytRabBolee6,
  sortOpytRabNet,
  sortGraphJobGibrid,
  sortGraphJobOVahta,
  sortGraphJobPolnaya,
  sortGraphJobSmena,
  sortGraphJobUdal,
} = vacansysSlice.actions;

export default vacansysSlice.reducer;
