import React from "react";
import HeroImage from "../components/layouts/HeroImage";
import CourseList from "../containers/CourseList/index";
import Categories from "../components/layouts/Categories";
import Comment from "../components/layouts/Comments";
import Footer from "../components/layouts/Footer";

const Home = props => {
  return (
    <>
      <HeroImage />
      <CourseList />
      <Categories />
      <Comment />
      <Footer />
    </>
  );
};
export default Home;
