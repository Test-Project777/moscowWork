import React from 'react';
import './uiStyle.css';

export default function Email(): JSX.Element {
  return (
    <div className='boxEmail'>
      <h2>Эл. почта</h2>
      <div className='linkEmailBox'>
        <div className="linkEmail">
          <p>Служба поддержки</p>
          <a href="mailto:shout68@yandex.ru">shout68@yandex.ru</a>
        </div>
        <div className="linkEmail">
          <p>Услуги для работодателей</p>
          <a href="mailto:shout68@yandex.ru">shout68@yandex.ru</a>
        </div>
        <div className="linkEmail">
          <p>Вопросы сотрудничества</p>
          <a href="mailto:shout68@yandex.ru">shout68@yandex.ru</a>
        </div>
      </div>
    </div>
  );
}
