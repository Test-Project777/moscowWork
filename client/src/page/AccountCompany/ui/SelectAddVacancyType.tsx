import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import { useAppSelector } from '../../../redux/hooks';

type Props = {
  setChekVacancyType: (value: string) => void;
  chekVacancyType: string;
};
export default function SelectAddVacancyType({
  setChekVacancyType,
  chekVacancyType,
}: Props): JSX.Element {
  const handleChange = (event: SelectChangeEvent): void => {
    setChekVacancyType(event.target.value);
  };
  const allCat= useAppSelector((state) => state.catSlice.categories)
  
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Категория вакансии</InputLabel>

        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={chekVacancyType}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          {allCat.map((item) => (<MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>))} /
          
        </Select>
      </FormControl>
    </div>
  );
}
