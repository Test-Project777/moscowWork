import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import type { AxiosResponse } from 'axios';
import axios from 'axios';

type Props = {
  setPathPhoto: (path: string) => void;
};

const VisuallyHiddenInput = styled('input')({
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

export default function AddLogoVacancy({ setPathPhoto }: Props): JSX.Element {
  const [file, setFile] = React.useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleUploadFile = (): void => {
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    axios
      .post('http://localhost:3001/api/photo/', formData)
      .then((response: AxiosResponse<{ path: string }>) => {
        setPathPhoto(response.data.path);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Логотип компании
      <VisuallyHiddenInput onChange={handleFileChange} type="file" />
      <button onClick={handleUploadFile} type="button">
        Загрузить фото
      </button>
    </Button>
  );
}
