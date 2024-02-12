import { Button, TextField } from '@mui/material';
import React from 'react';

export default function Header(): JSX.Element {
  const numberVacansion = 123435;

  return (
    <>
      <h1 className="title">Сайт поиска работы №1 в Москве</h1>
      <p>Сейчас у нас {numberVacansion} актуальная вакансия.</p>
      <div>
        <TextField
          className="inputSearch"
          id="outlined-basic"
          label="Должность или вакансия"
          variant="outlined"
        />
        <Button className="buttonSearch" variant="contained">
          Найти вакансии
        </Button>
      </div>
    </>
  );
}
