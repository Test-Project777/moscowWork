import React from 'react';
import './uiStyle.css';
import { Button, TextField, TextareaAutosize } from '@mui/material';

export default function FeedBackForm(): JSX.Element {
  return (
    <div className="inputFormBox">
      <h2>Обратная связь</h2>
      <p>
        Вы можете связаться с нами или задать нам вопрос, воспользовавшись формой, расположенной
        ниже.
      </p>
      <div className="inputGroup">
        <TextField
          sx={{ marginTop: '40px' }}
          id="outlined-basic"
          label="Ваше имя:"
          variant="outlined"
        />
        <TextField
          sx={{ marginTop: '40px' }}
          id="outlined-basic"
          label="Ваша электронная почта или телефон:"
          variant="outlined"
        />
        <TextareaAutosize
          style={{ marginTop: '40px', height: '400px', width: '700px' }}
          aria-label="empty textarea"
          placeholder="Введите ваше сообщение"
        />
        <Button className='btnFeedBack' variant="contained">Отправить</Button>
      </div>
    </div>
  );
}
