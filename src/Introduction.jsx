import * as React from "react";
/*mui */
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
/*mui icons */
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import GitHubIcon from "@mui/icons-material/GitHub";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5">About me</Typography>
      <Typography variant="body2">
        name : mizugame
        <br />
        大学の学部・学科 : 情報系
        <br />
        卒業 : 25卒（予定）
        <br />
        <Link
          href="https://github.com/mizugame634978"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <GitHubIcon fontSize="large" />
        </Link>
      </Typography>
    </CardContent>
  </React.Fragment>
);
export default function Introduction() {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid card xs={8}lg={6}>

        {/* <Card variant="outlined">{card}</Card> */}
        <Card>{card}</Card>
      </Grid>

    </Grid>
  );
}
