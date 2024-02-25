import * as React from 'react';
import { Button } from '@mui/material';
import { useAppSelector } from '../../redux/hooks';
import VacancyCardCompany from './ui/VacancyCardCompany';
import AddVacancyModal from './ui/AddVacancyModal';

export default function AccountCompanyPage(): JSX.Element {
  const user = useAppSelector((state) => state.authSlice.user);
  const vacancyUser = useAppSelector((state) =>
    state.vacSlice.allVacans.filter((vac) => vac.userId === user.id),
  );
  const [open, setOpen] = React.useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);
  return (
    <div>
      <h2>Мои вакансии</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        {vacancyUser.map((item) => (
          <VacancyCardCompany key={item.id} item={item} />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <Button onClick={handleOpen} variant="contained" color="success">
          Добавить вакансию
        </Button>
      </div>
      <AddVacancyModal open={open} handleClose={handleClose} />
    </div>
  );
}
