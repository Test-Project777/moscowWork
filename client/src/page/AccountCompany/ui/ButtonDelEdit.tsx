import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
  { icon: <DeleteIcon />, name: 'Удалить' },
  { icon: <EditIcon />, name: 'Изменить' },
  { icon: <ShareIcon />, name: 'Поделиться' },
];

export default function ButtonDelEdit(): JSX.Element {
  return (
    <Box sx={{ height: 120, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16, height: '5px', width: '5px' }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
        ))}
      </SpeedDial>
    </Box>
  );
}
