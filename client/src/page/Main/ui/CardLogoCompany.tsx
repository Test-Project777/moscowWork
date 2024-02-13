import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './uiStyle.css'

type Props = {
  item: {
    id: number;
    title: string;
    image: string;
  };
};

export default function CardLogoCompany({ item }: Props): JSX.Element {
  return (
    <div className="cardLogo">
      <img src={item.image} alt={item.title} className='image' title={`Работа в ${item.title}. Вакансия`} />

    </div>
  );
}
