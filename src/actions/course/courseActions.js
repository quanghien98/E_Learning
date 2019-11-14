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
      .get("/LayThongTinKhoaHoc?maKhoaHoc=")
      .then(res => {
        dispatch({
          type: Types.GET_COURSE_DETAILS,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };
};
export const getDetailCourseFromApi = (maKhoaHoc) => {
  return dispatch => {
    courseAPI
      .get(`/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
      .then(res => {
        dispatch({
          type: Types.GET_COURSE_DETAILS,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  }
}