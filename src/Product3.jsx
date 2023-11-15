import * as React from "react";
/*mui */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

/*icons */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
//
import{ Link }from "react-router-dom";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.primary" component="div">
        <AccountCircleIcon sx={{ fontSize: 100 }} />
      </Typography>
      <Typography variant="h5" component="div">
        このポートフォリオサイト
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        個人開発
      </Typography>
      <Typography variant="body2">
        SPAによる高速なページ遷移とスマホ対応
        <br />
      </Typography>
    </CardContent>
    <CardActions>
      <Link to="/Product3">
        <Button size="small">Learn More</Button>
      </Link>
    </CardActions>
  </React.Fragment>
);

export default function Product3() {
  return <Card>{card}</Card>;
}
