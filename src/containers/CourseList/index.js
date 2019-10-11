import React, { Component } from "react";
import { connect } from "react-redux";
import { getCourseList } from "../../actions/course/courseActions";

class CourseList extends Component {
  constructor(props){
    super(props)
    this.state={
      a:'def'
    }
  }
  componentDidMount() {
    this.props.getCourseList();
  }

  render() {
    console.log(this.props);
    
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
