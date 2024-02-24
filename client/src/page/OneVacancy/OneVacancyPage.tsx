import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

export default function OneVacancyPage(): JSX.Element {
  const { id } = useParams();
  const OneVacancy = useAppSelector((state) =>
    state.vacSlice.allVacans.filter((el) => el.id === Number(id)),
  );
  console.log(OneVacancy);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div
          style={{
            height: '320px',
            width: '630px',
            boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.5)',
            padding: '40px',
          }}
        >
          <h1>{OneVacancy[0]?.name}</h1>
          <p style={{ fontSize: '32px' }}>от {OneVacancy[0]?.price} ₽ до вычета налогов</p>
          <p>Требуемый опыт работы: {OneVacancy[0]?.expireance}</p>
          <p>{OneVacancy[0]?.format}</p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            height: '300px',
            width: '320px',
            boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          <h4>{OneVacancy[0]?.company}</h4>
          <img
            style={{ width: '100px', height: '100px', marginLeft: '20px' }}
            src={OneVacancy[0]?.image}
            alt={OneVacancy[0]?.company}
          />
        </div>
      </div>
      <div>3</div>
    </div>
  );
}
