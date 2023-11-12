import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        Skill
      </Typography>
      <Typography variant="body2">
        python:1年 , Django:4ヶ月
        <br />
        JavaScript:4ヶ月 , React:３ヶ月
        <br />
        html&css:７ヶ月
        <br />
        c言語:2年
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);
export default function Introduction() {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid card xs={8}lg={6}>
        {/* <Box> */}
        <Card variant="outlined">{card}</Card>
        {/* </Box> */}
        <br />
      </Grid>
    </Grid>
  );
}
