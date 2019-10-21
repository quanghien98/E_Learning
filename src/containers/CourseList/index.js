import React, { Component } from "react";
import { connect } from "react-redux";
import { getCourseList } from "../../actions/course/courseActions";

class CourseList extends Component {
  componentDidMount() {
    this.props.getCourseList();
  }

  render() {
    return <div>Course List</div>;
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
