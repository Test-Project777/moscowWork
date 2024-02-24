import React from 'react';
import { Button } from '@mui/material';
import type { VacancyType } from '../../../type/vacansy';

type Props = {
  card: VacancyType;
};
export default function CardVacansy({ card }: Props): JSX.Element {
  return (
    <div style={{ height: '100%', width: '830px', marginRight:'15px'}}>
      <div
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
          <div>
            <img src={card.image} alt="" />
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
            marginBottom:'5px'
          }}
        >
          <Button variant="contained">Откликнуться</Button>
          <Button variant="outlined">Показать контакты</Button>
        </div>
      </div>
    </div>
  );
}
