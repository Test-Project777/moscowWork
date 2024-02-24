import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  sortOpytRab13,
  sortOpytRab36,
  sortOpytRabBolee6,
  sortOpytRabNet,
} from '../../../redux/slices/vacansy';

export default function OpytRaboty(): JSX.Element {
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    switch (event.target.value) {
      case 'Не имеет значения':
        dispatch(sortOpytRabNet());
        break;
      case 'От 1 года до 3 лет':
        dispatch(sortOpytRab13());
        break;
      case 'От 3 года до 6 лет':
        dispatch(sortOpytRab36());
        break;
      case 'Более 6 лет':
        dispatch(sortOpytRabBolee6());
        break;

      default:
        break;
    }
  };
  return (
    <div style={{ marginTop: '50px' }}>
      <h2>Опыт работы</h2>

      <RadioGroup
        onChange={handleChange}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Не имеет значения"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Не имеет значения" control={<Radio />} label="Не имеет значения" />

        <FormControlLabel
          value="От 1 года до 3 лет"
          control={<Radio />}
          label="От 1 года до 3 лет"
        />
        <FormControlLabel
          value="От 3 года до 6 лет"
          control={<Radio />}
          label="От 3 года до 6 лет"
        />
        <FormControlLabel value="Более 6 лет" control={<Radio />} label="Более 6 лет" />
      </RadioGroup>
    </div>
  );
}
