import React, { useState } from 'react';

import { Button, MenuItem, Select, TextField } from '@mui/material';
import { useAppDispatch } from '../../../redux/hooks';
import { thunkSignup } from '../../../redux/slices/auth/createAsyncThunks';
import type { SignupFormData } from '../../../type/auth';

export default function RegistrForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    password: '',
    info: '',
    number: '',
  });

  const isFormValid = Object.values(formFields).every((field) => field.trim() !== '');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div style={{ margin: 'auto', width: 400, backgroundColor: 'white', padding: 20 }}>
      <h2>Регистрация</h2>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const formData: SignupFormData = {
            ...formFields,
          };
          dispatch(thunkSignup(formData));
        }}
      >
        <TextField
          label="Введите полное имя"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={formFields.name}
          onChange={handleInputChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={formFields.email}
          onChange={handleInputChange}
        />
        <TextField
          label="Пароль"
          variant="outlined"
          fullWidth
          margin="normal"
          name="password"
          type="password"
          value={formFields.password}
          onChange={handleInputChange}
        />
        <TextField
          label="О себе"
          variant="outlined"
          fullWidth
          margin="normal"
          name="info"
          value={formFields.info}
          onChange={handleInputChange}
        />
        <TextField
          label="Номер"
          variant="outlined"
          fullWidth
          margin="normal"
          name="number"
          value={formFields.number}
          onChange={handleInputChange}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          style={{ marginTop: 20 }}
        >
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
}
