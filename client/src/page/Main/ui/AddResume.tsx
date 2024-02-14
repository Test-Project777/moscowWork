import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import './uiStyle.css';

export const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function AddResume(): JSX.Element {
  return (
    <div className="addResumeBox">
      <h2>Разместить резюме</h2>
      <p>
        Создание резюме загимает в среднем 3-5 минут. Работодатели смогут найти ваше резюме и
        предложить вам работу.
      </p>
      <div className="addResumeButton">
        <Button className="btnAddResume" variant="contained" color="success">
          Создать
        </Button>
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
          Загрузить файл
          <VisuallyHiddenInput type="file" />
        </Button>
      </div>
    </div>
  );
}
