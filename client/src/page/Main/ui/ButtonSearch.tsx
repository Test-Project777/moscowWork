import { Button } from '@mui/material';
import React from 'react';
import '../style.css'

export default function ButtonSearch(): JSX.Element {
  return (
    <div className="buttonSearchBox">
      <Button className="searchButtonCategory" variant="outlined" size="large">
        Поиск по категориям
      </Button>
      <Button className="searchButtonCompany" variant="outlined" size="large">
        Поиск по компаниям
      </Button>
    </div>
  );
}
