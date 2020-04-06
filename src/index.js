import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { App } from "./App";
import { History } from "./History";
import "./assets/scss/theming.scss";

ReactDOM.render(
  <Router history={History}>
    <App />
  </Router>,
  document.getElementById("app")
);
