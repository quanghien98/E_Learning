import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import "./../node_modules/slick-carousel/slick/slick.css";
// import "./../node_modules/slick-carousel/slick/slick-theme.css";
import "../node_modules/slick-carousel/slick/slick.scss";
import "../node_modules/slick-carousel/slick/slick-theme.scss"; 
import "slick-carousel/slick/slick-theme.css";

import * as serviceWorker from "./serviceWorker";

/* ------------- redux store ------------- */
import { Provider } from "react-redux";
import configureStore from "./configureStore";

/* ------------- react router ------------ */
import MasterRouter from "./Router";

/* ---------------- style ---------------- */
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MasterRouter />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
