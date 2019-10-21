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
import NavBar from "./components/layouts/NavBar/";
// import CourseItem from "./containers/CourseItem";
import SearchList from "./containers/SearchList";
import CoursesByCategory from "./containers/CoursesByCategory";

export default class MasterRouter extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            eaxact
            path="/courses/category/:category"
            component={CoursesByCategory}
          />
          <Route
            exact
            path="/courses/search/:searchQuery"
            component={SearchList}
          />

          <Route path="/404" component={PageNotFound} />
          <Redirect from="" to="/404" />
          {/* <Route eaxact path="/course/:courseID" component={CourseItem} /> */}
          {/* <Redirect to="/" /> */}
        </Switch>
      </Router>
    );
  }
}
