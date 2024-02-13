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
      sx={{
        '& label.Mui-focused': {
          color: '#DC7A65',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#B2BAC2',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#E0E3E7',
          },
          '&:hover fieldset': {
            borderColor: '#B2BAC2',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'black',
          },
        },
      }}
    />
  );
}
