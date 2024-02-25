import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';

type Props = {
  chekObrazovanie: string;
  setChekObrazovanie: (value: string) => void;
};
export default function Obrazovanie({ chekObrazovanie, setChekObrazovanie }: Props): JSX.Element {
  const handleChange = (event: SelectChangeEvent): void => {
    setChekObrazovanie(event.target.value);
  };
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Образование</InputLabel>
        <Select
          style={{ width: '150px' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={chekObrazovanie}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="нет">Не имеет значения</MenuItem>
          <MenuItem value="Среднее специальное">Среднее специальное</MenuItem>
          <MenuItem value="Высшее">Высшее</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
