import React, { Component } from "react";
import { connect } from "react-redux";
import { getCourseList } from "../../actions/course/courseActions";

class CourseList extends Component {
  componentDidMount() {
    this.props.getCourseList();
  }

  render() {
    const { courses } = this.props;
    const courseID = courses.map((course, idx) => {
      return <h1 key={idx}>{course.maKhoaHoc}</h1>;
    });
    return <div className="text-center">{courseID}</div>;
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
