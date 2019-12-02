import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCourseList,
  selectCourse,
  requestCourseDetails
} from "../../../actions/course/courseActions";
// import _ from "lodash";
import TableCard from "../../../components/TableCard";
import AdminCourseForm from "../../../components/AdminCourseForm";

class CourseManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // isCourseTable: true,
      // NOTE passing isCourseTable to CardTable
      // component to get correct rendered component,
      // as CardTable is reusable
      currentPage: 1,
      itemsPerPage: 5,
      sortedBy: "name",
      currentItems: [],
      selectedCourseId: "",
      defaultCourseId: "111"
    };
  }

  setSelectedCourseId = id => {
    let selectedCourseId = id;
    this.setState({
      selectedCourseId
    });
  };
  /* -------------- Pagination ------------- */

  setCurrentPage = pageNumber => {
    this.setState({
      currentPage: pageNumber
    });
  };
  static getDerivedStateFromProps(props, state) {
    if (state.currentItems !== props.courses) {
      const indexOfLastItem = state.currentPage * state.itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - state.itemsPerPage;
      // console.log(indexOfFirstItem, indexOfLastItem);
      const list = props.courses;
      list.sort((a, b) => (a.maKhoaHoc > b.maKhoaHoc ? 1 : -1));

      const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
      return {
        currentItems
      };
    }
  }

  /* ------------ end pagination ----------- */

  componentDidMount() {
    this.props.getCourseList();
  }

  // 1. make sure that a default id is passed to get course details

  render() {
    console.log(this.state.selectedCourseId);

    // NOTE passing table data to <CardTable/> component 
    // via headings and rows
    const courseHeadings = [
      "id",
      "name",
      "category",
      "created by",
      "created on",
      "views",
      "students"
    ];

    const courseRows = this.state.currentItems.map(item => {
      return {
        col1: item.maKhoaHoc,
        col2: item.tenKhoaHoc,
        col3: item.danhMucKhoaHoc.tenDanhMucKhoaHoc,
        col4: item.nguoiTao.hoTen,
        col5: item.ngayTao,
        col6: item.luotXem,
        col7: item.soLuongHocVien
      };
    });
    // console.log("rows:", rows);
    const waitingListHeadings = ["#", "students' name", "account", "status"];
    const waitingListRows = [];

    return (
      <div className="adminCourses">
        <div className="adminContainer">
          <div className="adminCourses__list">
            <TableCard
              // isCourseTable={this.state.isCourseTable}
              tableTitle={"Course List"}
              paginate={this.setCurrentPage}
              totalItems={this.props.courses.length}
              itemsPerPage={this.state.itemsPerPage}
              currentPage={this.state.currentPage}
              rows={courseRows}
              headings={courseHeadings}
              requestCourseDetails={this.props.requestCourseDetails}
            />
          </div>
          <div className="adminCourses__item">
            <AdminCourseForm />
            {waitingListRows.length === 0 ? (
              <>
                <TableCard
                  tableTitle={"Waiting List"}
                  optionalDes={
                    "This course is currently not in any student's waiting list"
                  }
                ></TableCard>
              </>
            ) : (
              <TableCard
                headings={waitingListHeadings}
                rows={waitingListRows}
                tableTitle={"Waiting List"}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courseList,
    courseDetails: state.courseDetails
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCourseList: () => {
      dispatch(getCourseList());
    },
    selectCourse: selectedCourse => {
      dispatch(selectCourse(selectedCourse));
    },
    requestCourseDetails: courseId => {
      dispatch(requestCourseDetails(courseId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseManagement);
