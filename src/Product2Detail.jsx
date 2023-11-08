import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';


const card = (
  <React.Fragment>


      <Typography variant="h5" component="div">
        スマブラの対戦記録アプリ
      </Typography>
      <Typography variant='h1'>
        開発した経緯
      </Typography>
      <Typography variant='h2'>
        市場に自分のほしいと思ったアプリがなかったから

      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        個人開発・WEBアプリ
      </Typography>
      <Typography variant="body2">
        相手のキャラに対して自分がどのキャラを出せばよいか知る
        <br />
        aa
      </Typography>



      <Link href="https://github.com/mizugame634978/smash_note">
        <Button size="small">ソースコードを見る</Button>
      </Link>

  </React.Fragment>
);

export default function Product2Detail() {
  return (
    <Box sx={{ minWidth:275 }}>
      {card}
    </Box>
  );
}
