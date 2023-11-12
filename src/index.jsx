import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom"; // 追加

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>{/* エラーが出たら消す */}
    <BrowserRouter>{/*BrowserRouterで囲む*/}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
