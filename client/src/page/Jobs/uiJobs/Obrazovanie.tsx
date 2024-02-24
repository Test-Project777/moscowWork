import React, { useState } from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  allVacans,
  sortObazovanieSrednee,
  sortObazovanieVishee,
  sortObrazovanieNet,
} from '../../../redux/slices/vacansy';

export default function Obrazovanie(): JSX.Element {
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    switch (event.target.value) {
      case 'Не требуется или не указано':
        dispatch(sortObrazovanieNet());
        break;
      case 'Среднее профессиональное':
        dispatch(sortObazovanieSrednee());
        break;
      case 'Высшее':
        dispatch(sortObazovanieVishee());
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <h2>Образование</h2>
      <RadioGroup onChange={handleChange}>
        <FormControlLabel
          value="Не требуется или не указано"
          control={<Radio />}
          label="Не требуется или не указано"
        />
        <FormControlLabel
          value="Среднее профессиональное"
          control={<Radio />}
          label="Среднее профессиональное"
        />
        <FormControlLabel value="Высшее" control={<Radio />} label="Высшее" />
      </RadioGroup>
    </div>
  );
}
