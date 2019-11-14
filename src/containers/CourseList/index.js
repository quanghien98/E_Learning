import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";

import { connect } from "react-redux";
import { getCourseList } from "../../actions/course/courseActions";
import CourseItem from "../CourseItem";

class CourseList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
    this.props.getCourseList();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    const { courses } = this.props;
    const courseItem = courses.map((course, idx) => {
      return <CourseItem key={idx} course={course} index={idx} />;
    });
    return (
      <div className="">
        <h3>Students are viewing</h3>
        <div className="">
          <Slider {...settings}>
            {courseItem}
          </Slider>
        </div>
      </div>

    );

  }
}

const mapStateToProps = state => {
  return {
    courses: state.courseList
    // Get Data From Store
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCourseList: () => {
      dispatch(getCourseList());
      // Get Data From API And Set To Store
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseList);
