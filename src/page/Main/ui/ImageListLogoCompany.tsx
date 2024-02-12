import React, { useEffect, useState } from 'react';
import './uiStyle.css';
import axios from 'axios';
import CardLogoCompany from './CardLogoCompany';

type Card = {
  id: number;
  title: string;
  image: string;
};

export default function ImageListLogoCompany(): JSX.Element {
  const [card, setCard] = useState<Card[]>([]);
  useEffect(() => {
    void axios
      .get<Card[]>('https://fakestoreapi.com/products')
      .then((res) => {
        setCard(res.data);
        return res.data;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  console.log(card);

  return (
    <div className="imageLogoContainer">
      {card.map((item) => (
        <CardLogoCompany key={item.id} item={item} />
      ))}
    </div>
  );
}
