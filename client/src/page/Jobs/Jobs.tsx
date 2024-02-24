import React, { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import CardVacansy from './uiJobs/CardVacansy';
import SettingMenu from './uiJobs/SettingMenu';

export default function Jobs(): JSX.Element {
  const allVacansyes = useAppSelector((state) => state.vacSlice.vacancy);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
      <div>
        {allVacansyes.map((card) => (
          <CardVacansy card={card} key={card.id} />
        ))}
      </div>
      <div>
        <SettingMenu  />
      </div>
    </div>
  );
}
