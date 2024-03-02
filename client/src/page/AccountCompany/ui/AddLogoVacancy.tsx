import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';

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
type Props = {
  setPathPhoto: (path: string) => string;
};
export default function AddLogoVacancy({ setPathPhoto }: Props): JSX.Element {
  const [file, setFile] = React.useState(null);
  const handleFileChange = (event: React.FormEvent): void => {
    setFile(event.target.files[0]);
  };
  console.log(file);
  const handleUploadFile = (): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
    axios
      .post('http://localhost:3001/api/photo/', formData)
      .then((response) => {
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
