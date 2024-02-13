import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const colors = {
  success: {
    color: 'red',
    backgroundColor: 'blue',
  },
  primary: {
    color: 'green',
    backgroundColor: 'violet',
  },
  secondary: {
    color: 'yellow',
    backgroundColor: 'pink',
  },
};

const StyledButton = styled(Button)(({ color }) => ({
  color: colors[color].color,
  backgroundColor: colors[color].backgroundColor,
}));

export default StyledButton;
