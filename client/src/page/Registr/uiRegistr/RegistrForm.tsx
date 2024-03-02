import React, { useState } from 'react';
import '../style.css';

import { Button, MenuItem, Select, TextField } from '@mui/material';
import { useAppDispatch } from '../../../redux/hooks';
import { thunkSignup } from '../../../redux/slices/auth/createAsyncThunks';
import type { SignupFormData } from '../../../type/auth';

export default function RegistrForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    hashpass: '',
    info: '',
    number: '',
  });
  const [selectedRole, setSelectedRole] = useState('Кто вы?');

  const isFormValid = Object.values(formFields).every((field) => field.trim() !== '');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormFields((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div
      style={{
        width: '450px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '800px',
        borderRadius: '20px',
        backgroundColor: 'whitesmoke',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        padding: '20px',
        marginTop: '150px',
        marginBottom: '150px',
      }}
    >
      <div>
        <h2 style={{ fontSize: '38px' }}>Регистрация</h2>
      </div>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const formData = Object.fromEntries(
            new FormData(e.currentTarget),
          ) as unknown as SignupFormData;
          formData.role = selectedRole;

          if (selectedRole === 'Соискатель') {
            formData.role = 'Соискатель';
          } else if (selectedRole === 'Работодатель') {
            formData.role = 'Работодатель';
          }
          

          void dispatch(thunkSignup(formData));
          window.location.href = '/';
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
          name="hashpass"
          type="password"
          value={formFields.hashpass}
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
        <Select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          fullWidth
          variant="outlined"
        >
          <MenuItem value="">Кто вы?</MenuItem>
          <MenuItem value="Соискатель">Соискатель</MenuItem>
          <MenuItem value="Работодатель">Работодатель</MenuItem>
        </Select>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          style={{ marginTop: 60 }}
        >
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
}
