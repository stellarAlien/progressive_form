import React from 'react';
import { Box, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ShieldIcon from '@mui/icons-material/Shield';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const TrackingBar = () => {
  const nodes = [
    { label: 'Your Status', active: true, icon: <PersonIcon /> },
    { label: 'Your Need', active: false, icon: <ShieldIcon /> },
    { label: 'Your Form', active: false, icon: <AssignmentIcon /> },
    { label: 'Contractual Information', active: false, icon: <AssignmentTurnedInIcon /> },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Align items to the left
      }}
    >
      {nodes.map((node, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: node.active ? 'turquoise' : 'transparent',
              borderRadius: '50%',
              width: '3rem',
              height: '3rem',
              justifyContent: 'center',
              marginBottom: '0.5rem', // Add some bottom margin
              marginRight: '1.5rem', // Add some right margin
            }}
          >
            {node.icon}
          </Box>
          <Typography sx={{ marginLeft: 1 }}>{node.label}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default TrackingBar;
