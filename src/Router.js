import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

/* -------------- components ------------- */
import Home from "./layouts/Home";
import PageNotFound from "./components/PageNotFound";
import NavBar from "./components/layouts/Navbar/index";
import Category from "./components/Category";
import CourseItem from "./containers/CourseItem";
import SearchList from "./containers/SearchList";

export default class MasterRouter extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/courses/search/:searchQuery"
            component={SearchList}
          />
          <Redirect to="/" />
          <Route eaxact path="/courses/:category" component={Category} />
          <Redirect to="/" />
          <Route eaxact path="/course/:courseID" component={CourseItem} />
          <Redirect to="/" />

          <Route path="" component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}
