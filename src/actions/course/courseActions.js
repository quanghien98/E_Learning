import * as Types from "../../constants/actionTypes";
import courseAPI from "../../api/courseAPI";
import { getUserAccessKey } from "../user/userActions";
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
  };
};

/* --------- NOTE: CRUD functions -------- */

export const createNewCourse = newCourse => {
  const accessToken = getUserAccessKey();
  courseAPI.defaults.headers.common["Authorization"] = "Bearer" + accessToken;
  courseAPI
    .post("/ThemKhoaHoc", newCourse)
    .then(res => {
      console.log("Your course was successfully created");
      return res.data;
    })
    .catch(err => console.log(err));
};
export const updateCourse = updatedInfo => {
  const accessToken = getUserAccessKey();
  courseAPI.defaults.headers.common["Authorization"] = "Bearer" + accessToken;
  courseAPI
    .put("/CapNhatKhoaHoc", updatedInfo)
    .then(res => {
      console.log("Your course was successfully updated");
      return res.data;
    })
    .catch(err => console.log(err));
};

export const deleteCourse = courseId => {
  const accessToken = getUserAccessKey();
  courseAPI.defaults.headers.common["Authorization"] = "Bearer" + accessToken;
  courseAPI
    .put("/XoaKhoaHoc", courseId)
    .then(res => {
      console.log("Your course was successfully deleted");
      return res.data;
    })
    .catch(err => console.log(err));
};
