import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './uiStyle.css';

type Props = {
  item: {
    id: number;
    name: string;
    image: string;
    company: string;
  };
};

export default function CardLogoCompany({ item }: Props): JSX.Element {
  console.log(item, 1111);

  return (
    <div className="cardLogo">
      <img
        src={item.image}
        alt={item.name}
        className="image"
        title={`Работа в ${item.company}. Вакансия`}
      />
    </div>
  );
}
