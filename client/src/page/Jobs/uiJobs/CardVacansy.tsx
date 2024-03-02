/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Button } from '@mui/material';
import type { VacancyType } from '../../../type/vacansy';

type Props = {
  card: VacancyType;
};
export default function CardVacansy({ card }: Props): JSX.Element {
  const redirectHandler = (): void => {
    window.location.href = `/vacancy/${card.id}`;
  };
  return (
    <div style={{ height: '100%', width: '830px', marginRight: '15px' }}>
      <div
        onClick={(): void => {
          redirectHandler();
        }}
        style={{
          height: '100%',
          width: '800px',
          backgroundColor: 'whitesmoke',
          margin: '20px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.5)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ marginLeft: '30px' }}>{card.name}</h3>
            <p style={{ marginLeft: '30px' }}>{card.company}</p>
            <p style={{ marginLeft: '30px' }}>Опыт работы: {card.expireance}</p>
            <h4 style={{ marginLeft: '30px' }}>Заработная плата до вычета налога: {card.price}</h4>
          </div>
          <div style={{ height: '150px' }}>
            <img
              style={{ objectFit: 'cover', height: '150px', width: '150px' }}
              src={card.image}
              alt={card.name}
            />
          </div>
        </div>
        <div>
          <p style={{ color: 'green', marginLeft: '30px' }}>{card.format}</p>
        </div>
        <div
          style={{
            marginTop: '15px',
            display: 'flex',
            justifyContent: 'space-evenly',
            marginLeft: '15px',
            marginBottom: '5px',
          }}
        >
          <Button variant="contained">Откликнуться</Button>
          <Button variant="outlined">Показать контакты</Button>
        </div>
      </div>
    </div>
  );
}
