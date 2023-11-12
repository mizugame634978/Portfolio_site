import * as React from 'react';
/*mui*/
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';



export default function Introduction() {
  return (
    <>
    <br /><br /><br />
    <Grid container alignItems='center' justifyContent='center' textAlign="center" >
            <Grid item xs={12}>
        <Box sx={{ bgcolor: 'text.primary', color: 'background.paper', p: 2 }}>
          create by mizugame634978
        </Box>
      </Grid>


    </Grid>
    </>
  );
}