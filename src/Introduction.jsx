import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography>
        name : mizugame<br />
        大学の学部・学科 : 情報系<br />
        卒業 : 25卒（予定）<br />
        GitHub : https://github.com/mizugame634978 <br />
      </Typography>
    </CardContent>
    <br />
    </React.Fragment>
);
export default function Introduction() {
  return (
    <Grid container alignItems='center' justifyContent='center' >
      <Grid card xs = {6}>
    {/* <Box sx={{ maxWidth: 275}}> */}
      <Card variant="outlined">{card}</Card>
      </Grid>
    {/* </Box> */}

    </Grid>

  );
}