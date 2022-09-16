import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import MediaCard from './MediaCard';

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid  >
          <MediaCard title = 'Logged in'/>
        </Grid>
        <Grid >
          <MediaCard title = 'Not Logged in'/>
        </Grid>
        <Grid >
        <MediaCard title = 'Public'/>
        </Grid>
      </Grid>
    </Box>
    
  );
}
