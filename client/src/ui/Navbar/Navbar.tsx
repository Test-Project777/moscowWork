import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import type { UserType } from '../../type/auth';

type Props = {
  user: UserType;
};

export default function Navbar({ user }: Props): JSX.Element {
  const [selectedItem, setSelectedItem] = useState('');
  console.log(user, 123);

  return (
    <div className="menu">
      <h1 className="logo">MOSCOW.work</h1>
      <div className="menuItems">
        <a href="/jobs" className="findJobs">
          <p className={selectedItem === 'search' ? 'selected' : ''}>Найти вакансию</p>
        </a>

        {user.status === 'guest' ? (
          <Button
            className="btnMenu"
            onClick={() => {
              window.location.href = '/login';
            }}
            variant="outlined"
          >
            Войти
          </Button>
        ) : (
          <>
            <a href="/accountcompany" className="findJobs">
              <p className={selectedItem === 'resume' ? 'selected' : ''}>Разместить вакансию</p>
            </a>
            <a href="/account" className="findJobs">
              <Avatar alt={user.name} src={user.img} />
            </a>
          </>
        )}
      </div>
    </div>
  );
}
