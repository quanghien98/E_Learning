import React, { Component } from "react";
import { connect } from "react-redux";
import { getCourseList } from "../../actions/course/courseActions";
import CourseItem from '../CourseItem'
import Slider from "react-slick";
class CourseList extends Component {
  componentDidMount() {
    this.props.getCourseList();
  }

  render() {
    const { courses } = this.props;
    const courseID = courses.map((course, index) => {
      return <CourseItem key={index} course={course} />
    });
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          {courseID}
        </Slider>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courseList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCourseList: () => {
      dispatch(getCourseList());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseList);
