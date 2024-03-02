import { Button } from '@mui/material';
import React from 'react';
import './stile.css';
import SelectLanguage from './SelectLanguage';

export default function Footer(): JSX.Element {
  return (
    <div className="footer">
      <div className="buttonAndLanguage">
        <SelectLanguage />
        <Button variant="contained" size="small" className="footer_button">
          Работодателю {'>'}
        </Button>
      </div>
      <div className="linkFooter">
        <a href="/about" className="links">
          О нас
        </a>
        <a href="/contact" className="links">
          Контакты
        </a>
        <a href="/" className="links">
          Главная
        </a>
      </div>
      <div style={{ flexGrow: 1 }} /> {/* Пустой блок, занимающий всю доступную высоту */}
    </div>
  );
}
