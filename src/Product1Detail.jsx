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
      図書館システム
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      個人開発・WEBアプリ
      <br />
      使用技術:Python3,tkinter,sqlite3
    </Typography>

    <Typography variant="h5">開発した経緯</Typography>
    <Typography variant="body2">
    ■ 開発の背景
SEを目指すうえで、人に使われるサービスを作成したいと考えたため。
■ 共同開発者数
初期は9人で最終的には３人<br /><br />
■ 内容/役割
DB設計と画面設計（チーム）、技術選定（チーム）を担当。
実際の開発ではslackで文章を送信する機能、本を借りる、削除する機能と画面を担当。<br /><br />
■ 成果
長期的な運用保守を重視し、自分たちが卒業した後も研究室の生徒で運用できるように開発できた。<br /><br />
■ 学んだ点
今回のチーム開発では、途中でリーダーが来なくなってから、全員のやるべきことが曖昧になった結果、モティベーションが落ちて、多くのメンバーが離脱した。
その際、自分がリーダーになり、やるべきことを大まかに決めた後、相手の意見を聞くことで、メンバーのやるべきことが明確になり、それ以降メンバーが離脱しなかった。
この経験からチーム開発をする上では周りを指揮できるリーダーと、メンバーのモティベーションが大事だということが分かった。<br /><br />
■ 所感
そもそもの話でリーダーの経験がないメンバーしかいない場合は、チームの人数が多いと、リーダーの役割を果たしづらいと思った。
またアプリの見た目やアニメーションに興味を持ち、フロントエンドの技術を学ぶようになった。
    </Typography>

    <Link href="https://www.osakac.ac.jp/project_now/ei/1164">
      <Button size="small">掲載サイトを見る</Button>
    </Link>
  </React.Fragment>
);

export default function Product1Detail() {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid card xs={8}>
        <Card variant="outlined">
          <CardContent>{card}</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
