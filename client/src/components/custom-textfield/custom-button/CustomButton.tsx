import React from 'react';
import StyledButton from './styled';

type CustomButtonPropsType = {
  children: string;
  disabled?: boolean;
  color: 'success'| 'primary' | 'secondary'
};

export default function CustomButton({
  children,
  disabled,
  color
}: CustomButtonPropsType): JSX.Element {
  return <StyledButton disabled={!!disabled} color={color}>{children}</StyledButton>;
}
