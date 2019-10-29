import React, { Component } from "react";

import { connect } from "react-redux";

import { getCoursesByCategory } from "../../actions/course/courseActions";

import { withRouter, Redirect } from "react-router-dom";

import _ from "lodash";
import { Container } from "reactstrap";

import GradientHeader from "../../components/GradientHeader";
import SortButton from "../../components/SortButton";
import ItemCardStretch from "../../components/ItemCardStretch";
import ListPaginagtion from "../../components/ListPagination";

import { categories } from "../../variables/categories";

class CoursesByCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      correctPath: true,
      currentPage: 1,
      itemsPerPage: 10,
      currentItems: []
    };
  }

  getLastStringFromPath = () => {
    const string = _.last(this.props.location.pathname.split("/"));
    return string;
  };
  lastStringFromPath = this.getLastStringFromPath();
  getCategoryId = lastStringFromPath => {
    const matchedCategory = categories.filter(category => {
      return category.path === lastStringFromPath;
    });
    const matchedId = matchedCategory.map(category => category.categoryId);
    return matchedId;
  };

  getCategoryName = lastStringFromPath => {
    const matchedCategory = categories.filter(category => {
      return category.path === lastStringFromPath;
    });
    const matchedName = matchedCategory.map(category => category.name);
    return matchedName;
  };
  checkPath = (checkList, lastStringFromPath) => {
    const path = checkList.filter(path => {
      return path === lastStringFromPath;
    });
    if (path.length === 0) {
      this.setState({
        correctPath: false,
        currentPage: 1,
        itemsPerPage: 10,
        currentItems: []
      });
    }
  };
  /* ------------- pagitnation ------------- */

  setCurrentPage = pageNumber => {
    this.handleScroll();
    this.setState({
      currentPage: pageNumber
    });
  };

  static getDerivedStateFromProps(props, state) {
    if (state.currentItems !== props.categorizedCourses) {
      const indexOfLastItem = state.currentPage * state.itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - state.itemsPerPage;
      // console.log(indexOfFirstItem, indexOfLastItem);

      return {
        currentItems: props.categorizedCourses.slice(
          indexOfFirstItem,
          indexOfLastItem
        )
      };
    }
  }
  handleScroll = () => window.scrollTo(100, this.myRef.offsetTop);
  /* ------------ end pagination ----------- */

  componentDidMount() {
    const categoryPathList = categories.map(cat => cat.path);

    this.checkPath(categoryPathList, this.lastStringFromPath);
    const categoryId = this.getCategoryId(this.lastStringFromPath);
    console.log(categoryId);

    this.props.getCategorizedCourses(categoryId);
  }
  render() {
    const string = this.getLastStringFromPath();
    const id = this.getCategoryId(string);
    const categoryName = this.getCategoryName(this.lastStringFromPath);
    const dropdowns = ["Highest rated", "Newest", "Most picked"];

    const { categorizedCourses } = this.props;

    if (!this.state.correctPath) {
      return <Redirect to="/404" />;
    }
    return (
      <>
        <GradientHeader headerContent={categoryName} id="categoryList" />
        <Container className="coursesByCategory">
          <SortButton
            dropdowns={dropdowns}
            className="coursesByCategory__sortWrapper"
          />
          {categorizedCourses.map(course => (
            <ItemCardStretch
              key={course.maKhoaHoc}
              courseTitle={course.tenKhoaHoc}
              description={course.moTa}
              img={course.hinhAnh}
            />
          ))}
          <ListPaginagtion
            paginate={this.setCurrentPage}
            totalItems={this.props.categorizedCourses.length}
            itemsPerPage={this.state.itemsPerPage}
            currentPage={this.state.currentPage}
            href={"#categoryList"}
          />
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    categorizedCourses: state.coursesByCategory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getCourses: () => dispatch(getCourseList()),
    getCategorizedCourses: categoryId =>
      dispatch(getCoursesByCategory(categoryId))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CoursesByCategory)
);
