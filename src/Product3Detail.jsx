import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const card = (
  <React.Fragment>
    <Typography variant="h5" component="div">
      このポートフォリオサイト
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      個人開発・WEBアプリ
      <br />
      使用技術:JavaScript,React,material ui
    </Typography>

    <Typography variant="h5">開発した経緯</Typography>
    <Typography variant="body2">
      履歴書に開発実績をかけない企業があったため
    </Typography>
    <Typography>
      その他：開発する際にbootstrapの知識が少し活かせた
    </Typography>

    <Link href="https://github.com/mizugame634978/Portfolio_site">
      <Button size="small">ソースコードを見る</Button>
    </Link>
  </React.Fragment>
);

export default function Product3Detail() {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid card xs={10}lg={8}>
        <Card variant="outlined">
          <CardContent>{card}</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
