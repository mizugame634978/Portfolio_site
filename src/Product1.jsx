import * as React from "react";
/*mui */
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

/*mui icons */
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
/**router */
import{ Link }from "react-router-dom";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.primary" component="div">
        <LocalLibraryIcon sx={{ fontSize: 100 }} color="primary" />
      </Typography>

      <Typography variant="h5" component="div">
        本の貸出管理システム
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        チーム開発
      </Typography>
      <Typography variant="body2">
        学生３人のチームで学科のラウンジにある本を対象とした図書館システムを作成した.
        <br />
      </Typography>
    </CardContent>
    <CardActions>
      <Link to="/Product1">
        <Button size="small">Learn More</Button>
      </Link>
    </CardActions>
    
  </React.Fragment>
);

export default function Product1() {
  return <Card>{card}</Card>;
}
