import * as Types from "../../constants/actionTypes";
import courseAPI from "../../api/courseAPI";

export const getCourseList = () => {
  return dispatch => {
    courseAPI
      .get("/LayDanhSachKhoaHoc?MaNhom=GP09")
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

export const getSingleCourse = () => {
  return dispatch => {
    courseAPI
      .get("/LayThongTinKhoaHoc?maKhoaHoc=111")
      .then(res => {
        dispatch({
          type:Types.GET_SINGLE_COURSE,
          payload:res.data
        });
      })
      .catch(err => console.log(err));
  };
};