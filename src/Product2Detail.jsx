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
      スマブラの対戦記録アプリ
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      個人開発・WEBアプリ
      <br />
      使用技術:Python3,Django,postgreSQL
    </Typography>

    <Typography variant="h5">開発した経緯</Typography>
    <Typography variant="body2">
      市場に自分のほしいと思ったアプリがなかったから
    </Typography>
    <Typography>

■ 成果
ユーザーが考えることを減らし、質を落としてでも記録を残してもらえるように作った

■ 学んだ点

理解が曖昧でもなんとなくわかるなら作り始めたが、この方法だとモティベーションを保ちやすいことが分かった。
またフレームワークがクラスからテーブルを作成する場合は、考えたテーブルをそのままクラスに書いてはいけないことがわかった。
    </Typography>

    <Link href="https://github.com/mizugame634978/smash_note">
      <Button size="small">ソースコードを見る</Button>
    </Link>
  </React.Fragment>
);

export default function Product2Detail() {
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
