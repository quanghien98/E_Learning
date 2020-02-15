import * as Types from "../../constants/actionTypes";
import userAPI from "../../api/userAPI";

export const getUserAccount = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return user.taiKhoan;
};

export const getUserAccessKey = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return user.accessToken;
};

export const setUserLoginStat = stat => {
  return dispatch => {
    dispatch({
      type: Types.GET_USER_LOGIN_STAT,
      payload: stat
    });
  };
};

export const getUserFullName = () => {
  let userData = JSON.parse(localStorage.getItem("currentUser"));
  if (userData !== null) {
    let fullName = userData.hoTen;
    return dispatch => {
      dispatch({
        type: Types.GET_USER_FULL_NAME,
        payload: fullName
      });
    };
  }
};

export const setCurrentUser = data => {
  localStorage.setItem("currentUser", JSON.stringify(data));
};

export const logIn = async (userData, callback) => {
  try {
    let res = await userAPI.post("/DangNhap", userData);
    // save data in localStorage
    // localStorage.setItem("currentUser", JSON.stringify(res.data));
    setCurrentUser(res.data);
    callback(res.data);
  } catch (err) {
    if (err.response === undefined) {
      return null;
    } else {
      callback(err.response.data);
    }
  }
};

export const signUp = async (userData, callback) => {
  try {
    let res = await userAPI.post("/DangKy", userData);
    callback(res.data);
  } catch (err) {
    if (err.response === undefined) {
      return null;
    } else {
      callback(err.response.data);
    }
  }
};

export const getPaginatedUserList = async (page, pageSize) => {
  try {
    let res = await userAPI.get(
      `/LayDanhSachNguoiDung_PhanTrang?MaNhom=GP09&page=${page}&pageSize=${pageSize}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteUserAccount = account => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  // console.log(user.accessToken);
  userAPI.defaults.headers.common["Authorization"] =
    "Bearer " + user.accessToken;
  userAPI
    .delete("/XoaNguoiDung", account)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));
};