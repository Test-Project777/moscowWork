import type { ReactElement } from 'react';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import SelectAddVacancyType from './SelectAddVacancyType';
import ForamatRabot from './ForamatRabot';
import AddLogoVacancy from './AddLogoVacancy';
import OpytRabot from './OpytRabot';
import Obrazovanie from './Obrazovanie';
import { useAppDispatch } from '../../../redux/hooks';
import { thunkAddVacancy } from '../../../redux/slices/vacansy/createAsyncThunk';
import type { AddVacancyFormData } from '../../../type/vacansy';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
type AddVacancyModalProps = {
  open: boolean;
  handleClose: () => void;
};
export default function AddVacancyModal({ open, handleClose }: AddVacancyModalProps): ReactElement {
  const [chekVacancyType, setChekVacancyType] = useState('');
  const [chekFormRabot, setChekFormRabot] = useState('');
  const [chekOpytRabot, setChekOpytRabot] = useState('');
  const [chekObrazovanie, setChekObrazovanie] = useState('');
  const [pathPhoto, setPathPhoto] = useState('');
  const dispatch = useAppDispatch();
  console.log(pathPhoto, 'путь до фотки');

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Добавить новую вакансию
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = Object.fromEntries(
                new FormData(e.currentTarget),
              ) as unknown as AddVacancyFormData;

              formData.catId = chekVacancyType;
              formData.expireance = chekOpytRabot;
              formData.education = chekObrazovanie;
              formData.image = pathPhoto;
              void dispatch(thunkAddVacancy(formData));
            }}
          >
            <Typography
              style={{ display: 'flex', flexDirection: 'column' }}
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              <TextField
                style={{ marginBottom: '15px' }}
                id="outlined-basic"
                label="Имя компании"
                variant="outlined"
                name="company"
              />
              <TextField
                style={{ marginBottom: '15px' }}
                id="outlined-basic"
                label="Название вакансии"
                variant="outlined"
                name="name"
              />
              <div
                style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}
              >
                <SelectAddVacancyType
                  setChekVacancyType={setChekVacancyType}
                  chekVacancyType={chekVacancyType}
                />
                <AddLogoVacancy setPathPhoto={setPathPhoto} />
              </div>
              <TextField
                style={{ marginBottom: '15px' }}
                id="outlined-basic"
                label="Заработная плата"
                variant="outlined"
                placeholder="Введите сумму в рублях"
                name="price"
              />
              <TextField
                style={{ marginBottom: '15px' }}
                id="outlined-multiline-static"
                label="Описание вакансии"
                name="info"
                multiline
                rows={6}
              />
              <div
                style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}
              >
                <ForamatRabot chekFormRabot={chekFormRabot} setChekFormRabot={setChekFormRabot} />
                <OpytRabot chekOpytRabot={chekOpytRabot} setChekOpytRabot={setChekOpytRabot} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Obrazovanie
                  chekObrazovanie={chekObrazovanie}
                  setChekObrazovanie={setChekObrazovanie}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  marginTop: '15px',
                }}
              >
                <Button variant="contained" color="success" type="submit">
                  Создать вакансию
                </Button>
              </div>
            </Typography>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
