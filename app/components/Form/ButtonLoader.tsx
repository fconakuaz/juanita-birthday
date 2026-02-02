import { FC } from 'react';
import { Box, Button, CircularProgress } from '@mui/material';

export const ButtonLoader: FC = (): any => {
  return (
    <Box
      className="btn-main w-full mt-8 text-xl"
      sx={{ fontSize: '19px !important', textAlign: 'center' }}
    >
      <CircularProgress
        size={19}
        color="inherit"
        style={{ marginRight: '10px' }}
      />
      Confirmando
    </Box>
  );
};
