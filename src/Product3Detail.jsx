import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Product3Markdown from "./Product3Markdown";

const card = (
  <React.Fragment>
    <Typography variant="h5" component="div">
      このポートフォリオサイト
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      個人開発・WEBアプリ
      <br />
      使用技術:JavaScript,React,material ui(mui)
    </Typography>




    <Link
      href="https://github.com/mizugame634978/Portfolio_site"
      target="_blank"
      rel="noopener"
    >
      <Button size="small" variant="outlined">ソースコードを見る</Button>
    </Link>
  </React.Fragment>
);

export default function Product3Detail() {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid card xs={11} lg={8}>
        <Card>
          <CardContent>
            {card}
            <Product3Markdown/>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
