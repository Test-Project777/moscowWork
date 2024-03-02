import { Button, Container, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import type { LoginFormData } from '../../type/auth';
import { thunkLogin } from '../../redux/slices/auth/createAsyncThunks';

export default function Login(): JSX.Element {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const dispatch = useAppDispatch();
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isValid = (data: string): boolean => {
    if (data.length > 6) {
      return true;
    }
    return false;
  };
  useEffect(() => {
    if (isValid(input.email) && isValid(input.password)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [input]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = Object.fromEntries(new FormData(e.currentTarget)) as LoginFormData;
          void dispatch(thunkLogin(formData));
          window.location.href = '/';
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '290px',
            height: '600px',
            borderRadius: '20px',
            backgroundColor: 'whitesmoke',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            padding: '20px',
            marginTop: '150px',
            marginBottom: '150px',
          }}
        >
          <h2 style={{ marginBottom: '40px' }}>Авторизация</h2>
          <TextField
            name="email"
            type="text"
            placeholder="Введите"
            label="Введите ваш Email"
            onChange={changeHandler}
            style={{ marginTop: '50px' }}
          />
          <TextField
            name="password"
            type="text"
            placeholder="Введите"
            label="Введите ваш пароль"
            onChange={changeHandler}
            style={{ marginTop: '50px' }}
          />
          <Button variant="contained" color="primary" type="submit" style={{ marginTop: 60 }}>
            Войти
          </Button>
        </div>
        <div style={{ marginTop: '370px' }}>
          <p>
            Если у вас нет аккаунта, <a href="register">Зарегистрируйтесь</a>
          </p>
        </div>
      </form>
    </div>
  );
}
