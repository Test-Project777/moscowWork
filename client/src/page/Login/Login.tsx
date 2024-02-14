import { Button, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CustomTextField from '../../components/custom-textfield/CustomTextField';
import StyledButton from '../../components/custom-textfield/custom-button/CustomButton';
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
    <Container>
      <Grid
        container
        flexDirection="column"
        sx={{ width: 400, height: 600, borderRadius: '20px' }}
        justifyContent="center"
        alignItems="center"
        rowGap={4}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = Object.fromEntries(new FormData(e.currentTarget)) as LoginFormData;
            void dispatch(thunkLogin(formData));
          }}
        >
          <CustomTextField
            name="email"
            type="text"
            placeholder="Введите"
            label="Введите ваш Email"
            onChange={changeHandler}
          />
          <CustomTextField
            name="password"
            type="text"
            placeholder="Введите"
            label="Введите ваш пароль"
            onChange={changeHandler}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            style={{ marginTop: 60 }}
          >
            Войти
          </Button>
        </form>
        <p>
          Если у вас нет аккаунта, <a href="register">Зарегистрируйтесь</a>
        </p>
      </Grid>
    </Container>
  );
}
