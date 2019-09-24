import React from "react";
import {BrowwseRouter as Router,Route} from 'react-router-dom'; 
import Navbar from './../components/layouts/Navbar';
import Carousel from "../components/layouts/Carousel";
import CourseList from "../components/layouts/CourseList";
import Categories from "../components/layouts/Categories";
import Comment from "../components/layouts/Comments";
import Footer from "../components/layouts/Footer";

const Home = props => {
  return (
    
    <div>
      <Navbar/>
      <Carousel/>
      <CourseList/>
      <Categories/>
      <Comment/>
      <Footer/>
    </div>
  );
};
export default Home;
