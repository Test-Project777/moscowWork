import React, { useEffect, useState } from 'react';
import './uiStyle.css';
import axios from 'axios';
import CardLogoCompany from './CardLogoCompany';
import { useAppSelector } from '../../../redux/hooks';
import type { VacancyType } from '../../../type/vacansy';

export default function ImageListLogoCompany(): JSX.Element {
  const allLogo = useAppSelector((state) => state.vacSlice.vacancy);
  console.log(allLogo);

  return (
    <div className="imageLogoContainer">
      {allLogo.map((item) => (
        <CardLogoCompany key={item.id} item={item} />
      ))}
      <div className="textA">
        <a href="/jobs">Поиск работы по компании {'>'}</a>
      </div>
    </div>
  );
}
