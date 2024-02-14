import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import CardVacansy from './uiJobs/CardVacansy';
import SettingMenu from './uiJobs/SettingMenu';

export default function Jobs(): JSX.Element {
  const allVacansyes = useAppSelector((state) => state.vacSlice.vacancy);
  console.log(allVacansyes, 111111);

  return (
    <div style={{ display: 'flex' }}>
      {allVacansyes.map((card) => (
        <CardVacansy card={card} key={card.id} />
      ))}
      <SettingMenu />
    </div>
  );
}
