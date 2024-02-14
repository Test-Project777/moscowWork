import React from 'react';
import './style.css';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';

export default function SettingMenu(): JSX.Element {
  return (
    <div className="setMenuBox">
      <div>
        <h2>Подработка</h2>
        <FormGroup>
          <FormControlLabel required control={<Checkbox />} label="	От 4 часов в день" />
          <FormControlLabel required control={<Checkbox />} label="	Неполный день" />
          <FormControlLabel required control={<Checkbox />} label="По вечерам" />
          <FormControlLabel required control={<Checkbox />} label="	Разовое задание" />
          <FormControlLabel required control={<Checkbox />} label="	По выходным " />
        </FormGroup>
        <h2>Исключить слова</h2>
        <TextField id="outlined-basic" label="Исключить слова через запятую" variant="outlined" />
      </div>
      <div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Уровень дохода</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Не имеет значения"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="Не имеет значения"
              control={<Radio />}
              label="Не имеет значения"
            />
            <FormControlLabel value="от 60 000" control={<Radio />} label="от 60 000" />
            <FormControlLabel value="от 120 000" control={<Radio />} label="от 120 000" />
            <FormControlLabel value="от 150 000" control={<Radio />} label="от 150 000" />
            <FormControlLabel value="от 180 000" control={<Radio />} label="от 180 000" />
            <FormControlLabel value="от 210 000" control={<Radio />} label="от 210 000" />
            <FormControlLabel value="от 250 000" control={<Radio />} label="от 250 000" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}
