import { Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import React from 'react';

export default function Podrabotka(): JSX.Element {
  return (
    <div>
      <h2>Подработка</h2>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="	От 4 часов в день" />
        <FormControlLabel control={<Checkbox />} label="	Неполный день" />
        <FormControlLabel control={<Checkbox />} label="По вечерам" />
        <FormControlLabel control={<Checkbox />} label="	Разовое задание" />
        <FormControlLabel control={<Checkbox />} label="	По выходным " />
      </FormGroup>
      <h2>Исключить слова</h2>
      <TextField id="outlined-basic" label="Исключить слова через запятую" variant="outlined" />
    </div>
  );
}
