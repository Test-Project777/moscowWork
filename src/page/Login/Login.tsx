import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CustomTextField from '../../components/custom-textfield/CustomTextField';
import StyledButton from '../../components/custom-textfield/custom-button/styled';

export default function Login(): JSX.Element {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

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
        sx={{ border: '2px solid blue', width: 400, height: 600 }}
        justifyContent="center"
        alignItems="center"
        rowGap={4}
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
        <StyledButton type="submit" variant="outlined" color="success" disabled={disabled}>
          Отправить
        </StyledButton>
        <p>Если у вас нет аккаунта, зарегистрируйтесь</p>
      </Grid>
    </Container>
  );
}
