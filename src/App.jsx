import "./App.css";
import { Routes, Route } from "react-router-dom"; // 追加
import Product1 from "./Product1";
import Introduction from "./Introduction";
import Product2 from "./Product2";
import Product3 from "./Product3";
import Card from "@mui/material/Card";

import { Grid } from "@mui/material";
import { BrowserRouter } from "react-router-dom"; // 追加
import Product2Detail from "./Product2Detail";
import Product1Detail from "./Product1Detail";
import Product3Detail from "./Product3Detail";
import { ResponsiveAppBar } from "./ResponsiveAppBar";
function App() {
  return (
    <div>
      <ResponsiveAppBar/><br />
      <Routes>
        {" "}
        {/*Routesで囲む*/}
        <Route
          path="/"
          element={
            <div>
              <Introduction />
              <br />
              {/*
                Extra small (xs)
                Small (sm)
                Medium (md)
                Large (lg)
                Extra large (xl)
              */}
              <Grid
                container
                // justifyContent="center"
                spacing={1}
              >
                <Grid item xs={12} md={6} lg={4}>
                  <Product1 />
                </Grid>
                <Grid card xs={12} md={6} lg={4}>
                  <Product2 />
                </Grid>
                <Grid card xs={12} md={6} lg={4}>
                  <Product3 />
                </Grid>
              </Grid>

            </div>
          }
        />
        <Route path="/Product1" element={<Product1Detail />} />
        <Route path="/Product2" element={<Product2Detail />} />
        <Route path="/Product3" element={<Product3Detail />} />
      </Routes>
    </div>
  );
}

export default App;
