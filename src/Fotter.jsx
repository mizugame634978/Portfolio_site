import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';


export default function Introduction() {
  return (
    <>
    <br /><br /><br />
    <Grid container alignItems='center' justifyContent='center' textAlign="center" >
            <Grid item xs={12}>
        <Box sx={{ bgcolor: 'text.primary', color: 'background.paper', p: 2 }}>
          mizugame portfolio site
        </Box>
      </Grid>


    </Grid>
    </>
  );
}