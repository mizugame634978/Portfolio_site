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
import Product1Markdown from "./Product1Markdown";
const card = (
  <React.Fragment>
    <Typography variant="h5" component="div">
      図書館システム
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      チーム開発・デスクトップアプリ
      <br />
      使用技術:Python3,tkinter,sqlite3
    </Typography>


    <Stack spacing={2} direction="row">
      <Link href="https://www.osakac.ac.jp/project_now/ei/1164" target="_blank" rel="noopener">
        <Button size="small" variant="outlined">掲載サイトを見る</Button>
      </Link>
      <Link href="https://qiita.com/mizugame634978/items/b256e2563adc6d372599" target="_blank" rel="noopener">
        <Button size="small" variant="outlined">技術的な解説を見る</Button>
      </Link>
    </Stack>
  </React.Fragment>
);

export default function Product1Detail() {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid card xs={11}lg={8}>
        <Card >
          <CardContent>
            {card}
            <Product1Markdown/>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
