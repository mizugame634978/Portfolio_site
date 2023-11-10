import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{fontSize: 14}} color="text.primary" component="div">

        <AccountCircleIcon sx={{fontSize: 100 }} color="primary"/>
      </Typography>
      <Typography variant="h5" component="div">
        このポートフォリオサイト
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        個人開発
      </Typography>
      <Typography variant="body2">
        SPAによる高速なページ遷移とスマホ対応？
        <br />
        aa
      </Typography>
    </CardContent>
    <CardActions>
    <Link href="/Product3">
        <Button size="small">Learn More</Button>
      </Link>
    </CardActions>
  </React.Fragment>
);

export default function Product3() {
  return (
    // <Box sx={{ maxWidth: 300,minWidth:275 }}>
      <Card variant="outlined">{card}</Card>
    // </Box>
  );
}
