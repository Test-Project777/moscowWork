import React, { useEffect, useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, Grid } from '@mui/material';
import CustomTextField from '../../components/custom-textfield/CustomTextField';
import { VisuallyHiddenInput } from '../Main/ui/AddResume';

export default function Account(): JSX.Element {
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
    if (data.length === 0) {
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

  const submitHandler = (): void => {
    console.log('заглушка');
  };
  return (
    <Grid container width={500} flexDirection="column" rowGap={5} margin={5}>
      <CustomTextField
        name="name"
        type="text"
        placeholder="Введите имя"
        label="Ваше имя"
        onChange={changeHandler}
      />
      <CustomTextField
        name="surname"
        type="text"
        placeholder="Введите фамилию"
        label="Ваша фамилия"
        onChange={changeHandler}
      />
      <Grid item>
        <CustomTextField
          name="email"
          type="text"
          placeholder="Введите Ваш возраст"
          label="Ваш возраст"
          onChange={changeHandler}
        />
      </Grid>
      <CustomTextField
        name="email"
        type="text"
        placeholder="Введите Ваш возраст"
        label="Ваш возраст"
        onChange={changeHandler}
      />
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        disabled={disabled}
      >
        Загрузить файл
        <VisuallyHiddenInput type="file" />
      </Button>
    </Grid>
  );
}
