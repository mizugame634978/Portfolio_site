import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';


const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{fontSize: 14}} color="text.primary" component="div">

        <SportsEsportsIcon sx={{fontSize: 100 }}/>
      </Typography>
      <Typography variant="h5" component="div">
        スマブラの対戦記録アプリ
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        個人開発
      </Typography>
      <Typography variant="body2">
        相手のキャラに対して自分がどのキャラを出せばよいか知る
        <br />
        aa
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function Product2() {
  return (
    <Box sx={{ maxWidth: 300,minWidth:275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}