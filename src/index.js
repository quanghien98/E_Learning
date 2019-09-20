import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Admin from "./layouts/Admin";
import HomePage from "./layouts/Home";
/* ------------- React router ------------ */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/* ---------------- style ---------------- */
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";

ReactDOM.render(<HomePage />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
