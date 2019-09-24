import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* -------------- components ------------- */
import Home from "./layouts/Home";
import PageNotFound from "./components/PageNotFound";
import Navbar from "./components/layouts/Navbar";
import Category from "./components/Category";
import CourseItem from "./components/CourseItem";

export default class MasterRouter extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/courses/:category" component={Category} />
          <Route path="/course/:courseID" component={CourseItem} />
          <Route path="" component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}
