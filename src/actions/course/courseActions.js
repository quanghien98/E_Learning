import * as Types from "../../constants/actionTypes";
import courseAPI from "../../api/courseAPI";

export const getCourseList = () => {
  return dispatch => {
    courseAPI
      .get("/LayDanhSachKhoaHoc?maKhoaHoc=GP09")

      .then(res => {
        dispatch({
          type: Types.GET_COURSES,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };
};

export const getSearchField = searchField => {
  return {
    type: Types.GET_SEARCH_FIELD,
    payload: searchField
  };
};

export const getCoursesByCategory = categoryId => {
  return dispatch => {
    courseAPI
      .get(`/LayKhoaHocTheoDanhMuc?maDanhMuc=${categoryId}&MaNhom=GP09`)
      .then(res => {
        dispatch({
          type: Types.GET_COURSES_BY_CATEGORY,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };
};

export const selectCourse = selectedCourse => {
  return dispatch => {
    dispatch({
      type: Types.SELECT_COURSE,
      payload: selectedCourse
    });
  };
};

export const requestCourseDetails = courseId => {
  return dispatch => {
    try {
      courseAPI.get(`/LayThongTinKhoaHoc?maKhoaHoc=${courseId}`).then(res => {
        dispatch({
          type: Types.GET_COURSE_DETAILS,
          payload: res.data
        });
      });
    } catch (err) {
      console.log(err);
    }

    // .catch(err => console.log(err));
  };
};
