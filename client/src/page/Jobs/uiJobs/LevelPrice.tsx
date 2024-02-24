import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  sortPrice100k,
  sortPrice120k,
  sortPrice150k,
  sortPrice40k,
  sortPrice80k,
  sortPriceBolee150k,
} from '../../../redux/slices/vacansy';

export default function LevelPrice(): JSX.Element {
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    switch (event.target.value) {
      case 'до 40 000':
        dispatch(sortPrice40k());
        break;
      case 'до 80 000':
        dispatch(sortPrice80k());
        break;
      case 'до 100 000':
        dispatch(sortPrice100k());
        break;
      case 'до 120 000':
        dispatch(sortPrice120k());
        break;
      case 'до 150 000':
        dispatch(sortPrice150k());
        break;
      case 'более 150 000':
        dispatch(sortPriceBolee150k());
        break;

      default:
        break;
    }
  };
  return (
    <div style={{ marginTop: '50px' }}>
      <RadioGroup onChange={handleChange}>
        <FormControlLabel value="до 40 000" control={<Radio />} label="до 40 000" />
        <FormControlLabel value="до 80 000" control={<Radio />} label="до 80 000" />
        <FormControlLabel value="до 100 000" control={<Radio />} label="до 100 000" />
        <FormControlLabel value="до 120 000" control={<Radio />} label="до 120 000" />
        <FormControlLabel value="до 150 000" control={<Radio />} label="до 150 000" />
        <FormControlLabel value="более 150 000" control={<Radio />} label="более 150 000" />
      </RadioGroup>
    </div>
  );
}
