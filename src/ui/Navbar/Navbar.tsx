import { Button } from '@mui/material';
import React, { useState } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

export default function Navbar(): JSX.Element {
  const [selectedItem, setSelectedItem] = useState('');

  return (
    <div className="menu">
      <h1 className="logo">MOSCOW.work</h1>
      <div className="menuItems">
        <a href="/jobs" className="findJobs">
          <p className={selectedItem === 'search' ? 'selected' : ''}>Найти вакансию</p>
        </a>
        <a href="/account" className='findJobs'>
          <p className={selectedItem === 'resume' ? 'selected' : ''}>Разместить резюме</p>
        </a>
        <Button
          className="btnMenu"
          onClick={() => {
            window.location.href = '/login';
          }}
          variant="outlined"
        >
          Войти
        </Button>
      </div>
    </div>
  );
}
