import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import type { ChangeEvent } from 'react';
import React from 'react';

type Props = {
  setChekFormRabot: (value: string) => void;
  chekFormRabot: string;
};
export default function ForamatRabot({ setChekFormRabot, chekFormRabot }: Props): JSX.Element {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name } = event.target;
    
      setChekFormRabot(name);
    
  };
  return (
    <div>
      <FormGroup onChange={handleChange}>
        <FormControlLabel
          control={<Checkbox />}
          label="Удаленная работа"
          name="Удаленная работа"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Сменный график"
          name="Сменный график"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Гибкий график"
          name="Гибкий график"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Вахтовый метод"
          name="Вахтовый метод"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Полная занятость"
          name="Полная занятость"
        />
      </FormGroup>
    </div>
  );
}
