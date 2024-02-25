import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';

type Props = {
  chekOpytRabot: string;
  setChekOpytRabot: (value: string) => void;
};

export default function OpytRabot({ chekOpytRabot, setChekOpytRabot }: Props): JSX.Element {
  const handleChange = (event: SelectChangeEvent): void => {
    setChekOpytRabot(event.target.value);
  };
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel style={{ width: '100px' }} id="demo-simple-select-label">
          Опыт работы
        </InputLabel>
        <Select
          style={{ width: '150px' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={chekOpytRabot}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="нет">Не имеет значения</MenuItem>
          <MenuItem value="1-3 лет">От 1 года до 3 лет</MenuItem>
          <MenuItem value="3-6 лет">От 3 года до 6 лет</MenuItem>
          <MenuItem value="более 6 лет">Более 6 лет</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
