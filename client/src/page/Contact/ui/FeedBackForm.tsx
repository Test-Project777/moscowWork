import React from 'react';
import './uiStyle.css';
import { Button, TextField, TextareaAutosize } from '@mui/material';

export default function FeedBackForm(): JSX.Element {
  return (
    <div className="inputFormBox">
      <h2 style={{ marginLeft: '40%' }}>Обратная связь</h2>
      <p style={{ marginLeft: '15%' }}>
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
        <Button sx={{ marginTop: '50px', marginBottom: '50px' }} variant="contained">
          Отправить
        </Button>
      </div>
    </div>
  );
}
