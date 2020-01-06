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
import CourseSyllabus from "./containers/CourseSyllabus";
import LogIn from "./containers/Auth/LogIn";
import SignUp from "./containers/Auth/SignUp";
import Admin from "./layouts/Admin";

export default class MasterRouter extends Component {
  handleAuth = () => {
    let userData = JSON.parse(localStorage.getItem("currentUser"));
    if (userData === null) {
      return <Redirect from="" to="/" />;
    } else if (userData !== null) {
      let accountType = userData.maLoaiNguoiDung;
      if (accountType === "GV") {
        return <Route exact path="/admin" component={Admin} />;
      } else {
        return <Redirect from="" to="/" />;
      }
    }
  };

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
          <Route
            exact
            path="/course/learn/syllabus"
            component={CourseSyllabus}
          />
          <Route exact path="/log-in" component={LogIn} />
          <Route exact path="/sign-up" component={SignUp} />
          {/* <Route exact path="/admin" component={Admin} /> */}
          {this.handleAuth()}
          <Route path="/404" component={PageNotFound} />
          <Redirect from="" to="/404" />

          {/* <Route eaxact path="/course/:courseID" component={CourseItem} /> */}
          {/* <Redirect to="/" /> */}
        </Switch>
      </Router>
    );
  }
}
