import { TextField } from '@mui/material';
import React from 'react';

type CustomTextFieldPropsType = {
  name: string;
  type: string;
  defaultValue?: string;
  placeholder: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CustomTextField({
  name,
  type,
  defaultValue,
  placeholder,
  label,
  onChange
}: CustomTextFieldPropsType): JSX.Element {
  return (
    <TextField
      name={name}
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
      variant="outlined"
      label={label}
    />
  );
}
