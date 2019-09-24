import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Carousel from "../components/layouts/Carousel";
import CourseList from "../components/layouts/CourseList";
import Categories from "../components/layouts/Categories";
import Comment from "../components/layouts/Comments";
import Footer from "../components/layouts/Footer";

const Home = props => {
  return (
    <Router>
      <Carousel />
      <CourseList />
      <Categories />
      <Comment />
      <Footer />
    </Router>
  );
};
export default Home;
