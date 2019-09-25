import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* -------------- components ------------- */
import Home from "./layouts/Home";
import PageNotFound from "./components/PageNotFound";
import NavBar from "./components/layouts/NavBar";
import Category from "./components/Category";
import CourseItem from "./components/CourseItem";


export default class MasterRouter extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route eaxact path="/courses/:category" component={Category} />
          <Route eaxact path="/course/:courseID" component={CourseItem} />
          <Route path="" component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}
