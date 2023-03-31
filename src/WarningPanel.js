import React from 'react';
import { Box, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const WarningPanel = ({ text }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'teal',
        padding: 1,
        borderRadius: 1,
      }}
    >
      <InfoIcon sx={{ position: 'relative', left: -16 }} />
      <Typography sx={{ textAlign: 'center' }}>
        {text}
      </Typography>
    </Box>
  );
};
export default WarningPanel;
