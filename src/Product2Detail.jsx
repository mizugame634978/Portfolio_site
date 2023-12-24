import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Product2Markdown from "./Product2Markdown";
const card = (
  <React.Fragment>
    <Typography variant="h5" component="div">
      スマブラの対戦記録アプリ
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      個人開発・WEBアプリ
      <br />
      使用技術:Python3,Django,postgreSQL
    </Typography>

    <Stack spacing={2} direction="row">
      <Link href="https://smash-note.onrender.com/smash_note/" target="_blank" rel="noopener">
        <Button size="small" variant="outlined">触ってみる</Button>
      </Link>
      <Link href="https://github.com/mizugame634978/smash_note" target="_blank" rel="noopener">
        <Button size="small" variant="outlined">ソースコードを見る</Button>
      </Link>
    </Stack>
  </React.Fragment>
);

export default function Product2Detail() {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid card xs={11}lg={8}>
        <Card>
          <CardContent>
            {card}
            <Product2Markdown/>
            </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
