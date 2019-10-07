import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeroImage from "../components/layouts/HeroImage";
import CourseList from "../components/layouts/CourseList";
import Categories from "../components/layouts/Categories";
import Comment from "../components/layouts/Comments";
import Footer from "../components/layouts/Footer";

const Home = props => {
  return (
    <Router>
      <HeroImage />
      <CourseList />
      <Categories />
      <Comment />
      <Footer />
    </Router>
  );
};
export default Home;
