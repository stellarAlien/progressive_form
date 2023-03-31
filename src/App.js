import React from 'react';
import { Container, Box, Typography, Grid, Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import TrackingBar from './TrackingBar';
import WarningPanel from './WarningPanel';

function App() {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
        }}
      >
        <Box>Logo</Box>
        <Box>
          Business Hours: 9 AM - 5 PM
          <br />
          Phone: (555) 123-4567
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: 'beige',
          py: 6,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '-20px',
            width: '100%',
            height: '50px',
            background: 'beige',
            transform: 'skewY(-4deg)',
            zIndex: '-1',
          }}
        />
        <Typography variant="h4" align="center" sx={{ mb: 4 }}>
          Choose a Plan
        </Typography>
      </Box>

      <Box sx={{ my: 6 }}>
        <WarningPanel text="another warning panel" />
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={9}>
          <Typography variant="h5" sx={{ mb: 4 }}>
            What do you wish to insure?
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: 200,
                  cursor: 'pointer',
                  background: '#f6f5f5',
                  borderRadius: '10px',
                }}
                onClick={() => console.log('Myself box clicked')}
              >
                <PersonIcon sx={{ fontSize: '4rem' }} />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Myself
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: 200,
                  cursor: 'pointer',
                  background: '#f6f5f5',
                  borderRadius: '10px',
                }}
                onClick={() =>
                  console.log('Myself and Beneficiaries box clicked')
                }
              >
                <PeopleIcon sx={{ fontSize: '4rem' }} />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Myself and Beneficiaries
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          <Box sx={{ my: 6 }}>
            <WarningPanel text="another warning panel" />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <TrackingBar />
        </Grid>
      </Grid>

      <Box
        sx={{
          borderTop: '1px solid grey',
          py: 2,
          mt: 6,
        }}
      >
        Footer
      </Box>
    </Container>
  );
}

export default App;
