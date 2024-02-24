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
import Podrabotka from './Podrabotka';
import LevelPrice from './LevelPrice';
import Obrazovanie from './Obrazovanie';
import OpytRaboty from './OpytRaboty';
import TypeJobs from './TypeJobs';

export default function SettingMenu(): JSX.Element {
  return (
    <div>
      <Podrabotka />
      <LevelPrice />
      <Obrazovanie />
      <OpytRaboty />
      <TypeJobs />
    </div>
  );
}
