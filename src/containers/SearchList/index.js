import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { withRouter } from "react-router-dom";
import { getCourseList } from "../../actions/course/courseActions";

class SearchList extends Component {
  recreateStore = () => {
    if (this.props.courses.length === 0) {
      console.log("Course list is empty");
      this.props.getCourseList();
    }
  };

  getSearchQuery = () => {
    const url = this.props.history.location.pathname;
    const query = _.last(url.split("/"));
    return query;
  };

  handleSearch = query => {
    const { courses } = this.props;
    const filteredData = courses.filter(course => {
      return course.tenKhoaHoc.toLowerCase().includes(query.toLowerCase());
    });
    return filteredData;
  };

  componentDidMount() {
    this.recreateStore();
  }

  render() {
    const query = this.getSearchQuery();
    console.log(query);

    const filteredData = this.handleSearch(query);
    const notFound = `There's no match for "${query}", please try different keywords`;

    return (
      <div className="text-center">
        <h1>Search List</h1>
        <br />
        <h2>
          You're searching for: <strong>{query}</strong>
        </h2>
        <br />
        <h2> Result:</h2>
        {filteredData.length === 0 ? (
          <h3>{notFound}</h3>
        ) : (
          filteredData.map(item => {
            return <h3 key={item.maKhoaHoc}>{item.tenKhoaHoc}</h3>;
          })
        )}
      </div>
    );
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
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchList)
);
