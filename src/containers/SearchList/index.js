import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import _ from "lodash";
import { Container } from "reactstrap";

import { getCourseList } from "../../actions/course/courseActions";
import SortButton from "../../components/SortButton";
import ItemCardStretch from "../../components/ItemCardStretch";
import ListPagination from "../../components/ListPagination";

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      currentPage: 1,
      itemsPerPage: 10,
      currentItems: []
    };
  }

  recreateStore = () => {
    if (this.props.courses.length === 0) {
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
      return (
        course.tenKhoaHoc.toLowerCase().includes(query.toLowerCase()) ||
        course.moTa.toLowerCase().includes(query.toLowerCase())
      );
    });
    return filteredData;
  };

  /* ------------- pagitnation ------------- */

  setCurrentPage = pageNumber => {
    this.handleScroll();
    this.setState({
      currentPage: pageNumber
    });
  };

  static getDerivedStateFromProps(props, state) {
    if (state.currentItems !== props.courses) {
      const url = props.history.location.pathname;
      const query = _.last(url.split("/"));
      const indexOfLastItem = state.currentPage * state.itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - state.itemsPerPage;
      // console.log(indexOfFirstItem, indexOfLastItem);

      return {
        currentItems: props.courses
          .filter(course => {
            return (
              course.tenKhoaHoc.toLowerCase().includes(query.toLowerCase()) ||
              course.moTa.toLowerCase().includes(query.toLowerCase())
            );
          })
          .slice(indexOfFirstItem, indexOfLastItem)
      };
    }
  }
  handleScroll = () => window.scrollTo(100, this.myRef.offsetTop);
  /* ------------ end pagination ----------- */

  componentDidMount() {
    this.recreateStore();
  }

  render() {
    const query = this.getSearchQuery();
    const filteredData = this.handleSearch(query);
    const notFound = `There's no match for "${query}", please try different keywords`;
    const dropdownList = ["Highest Rated", "Newest"];

    const getHeader = () => {
      const length = filteredData.length;
      if (length === 0) {
        return null;
      } else if (length === 1) {
        return (
          <h5>
            {length} result found for <strong>{query}</strong>
          </h5>
        );
      }
      return (
        <h5>
          {length} results found for <strong>{query}</strong>
        </h5>
      );
    };
    const searchHeader = getHeader();

    return (
      <div className="searchList">
        <div className="searchList__header">
          <Container ref={this.myRef}>
            {searchHeader}
            {filteredData.length > 1 ? (
              <SortButton dropdowns={dropdownList} />
            ) : (
              <></>
            )}
          </Container>
        </div>
        <Container>
          {filteredData.length === 0 ? (
            <h3>{notFound}</h3>
          ) : (
            this.state.currentItems.map(item => {
              return (
                <ItemCardStretch
                  key={item.maKhoaHoc}
                  courseTitle={item.tenKhoaHoc}
                  description={item.moTa}
                  img={item.hinhAnh}
                />
              );
            })
          )}

          <ListPagination
            paginate={this.setCurrentPage}
            totalItems={filteredData.length}
            itemsPerPage={this.state.itemsPerPage}
            currentPage={this.state.currentPage}
            href={"#searchList"}
          />
        </Container>
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
