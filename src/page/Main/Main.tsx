import { Button, TextField } from '@mui/material';
import React from 'react';
import './style.css';
import ButtonSearch from './ui/ButtonSearch';
import ImageListLogoCompany from './ui/ImageListLogoCompany';

export default function Main(): JSX.Element {
  const numberVacansion = 123435;
  return (
    <div className="mainBox">
      <div className="header">
        <h1 className="title">Сайт поиска работы №2 в Москве</h1>
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
      </div>
      <div className="content">
        <ButtonSearch />
        <ImageListLogoCompany />
      </div>
    </div>
  );
}
