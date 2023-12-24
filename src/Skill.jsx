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
        python:2022年7月～ <br />
        Django:2023年3月～<br />
        <br />
        JavaScript:2023年6月～ <br />
        React:2023年7月～<br />
        <br />
        html&css:７ヶ月<br />
        c言語:2021年4月～2023年1月<br />
      </Typography>
    </CardContent>
  </React.Fragment>
);
export default function Introduction() {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid card xs={8}lg={6}>
        {/* <Box> */}
        <Card>{card}</Card>
        {/* </Box> */}
        <br />
      </Grid>
    </Grid>
  );
}
