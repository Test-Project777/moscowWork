import { Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  sortGraphJobGibrid,
  sortGraphJobOVahta,
  sortGraphJobPolnaya,
  sortGraphJobSmena,
  sortGraphJobUdal,
} from '../../../redux/slices/vacansy';

export default function TypeJobs(): JSX.Element {
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    switch (event.target.value) {
      case 'Полная занятость':
        dispatch(sortGraphJobPolnaya());
        break;
      case 'Сменный график':
        dispatch(sortGraphJobSmena());
        break;
      case 'Удаленная работа':
        dispatch(sortGraphJobUdal());
        break;
      case 'Гибкий график':
        dispatch(sortGraphJobGibrid());
        break;
      case 'Вахтовый метод':
        dispatch(sortGraphJobOVahta());
        break;
      default:
        break;
    }
  };
  return (
    <div style={{ marginTop: '50px' }}>
      <h2>График работы</h2>
      <RadioGroup onChange={handleChange}>
        <FormControlLabel control={<Radio />} label="Полная занятость" value="Полная занятость" />
        <FormControlLabel control={<Radio />} label="Сменный график" value="Сменный график" />
        <FormControlLabel control={<Radio />} label="Удаленная работа" value="Удаленная работа" />
        <FormControlLabel control={<Radio />} label="Гибкий график" value="Гибкий график" />
        <FormControlLabel value="Вахтовый метод" control={<Radio />} label="Вахтовый метод" />
      </RadioGroup>
    </div>
  );
}
