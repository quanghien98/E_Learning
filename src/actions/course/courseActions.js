import * as Types from "../../constants/actionTypes";
import courseAPI from "../../api/courseAPI";
import { getUserAccessKey } from "../user/userActions";

export const getCourseList = () => {
  return dispatch => {
    courseAPI
      .get("/LayDanhSachKhoaHoc?maNhom=GP09")

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
    courseAPI
      .get(`/LayThongTinKhoaHoc?maKhoaHoc=${courseId}`)
      .then(res => {
        dispatch({
          type: Types.GET_COURSE_DETAILS,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };
};

export const requestCourseCategories = callback => {
  courseAPI
    .get("/LayDanhMucKhoaHoc")
    .then(res => {
      // console.log(res.data);
      callback(res.data);
    })
    .catch(err => console.log(err));
};


/* --------- NOTE: CRUD functions -------- */

export const createNewCourse = (newCourse, callback) => {
  const accessToken = getUserAccessKey();
  courseAPI.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
  courseAPI
    .post("/ThemKhoaHoc", newCourse)
    .then(res => {
      console.log("Your course was successfully created");
      callback(res.data);
    })
    .catch(err => console.log(err));
};

export const updateCourse = updatedInfo => {
  const accessToken = getUserAccessKey();
  courseAPI.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
  courseAPI
    .put("/CapNhatKhoaHoc", updatedInfo)
    .then(res => {
      console.log("Your course was successfully updated");
      return res.data;
    })
    .catch(err => console.log(err));
};

export const deleteCourse = (courseId, callback, callback2) => {
  const accessToken = getUserAccessKey();
  courseAPI.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
  courseAPI
    .delete(`/XoaKhoaHoc?MaKhoaHoc=${courseId}`)
    .then(res => {
      callback(res);
    })
    .then(callback2())
    .catch(err => console.log(err));
};
