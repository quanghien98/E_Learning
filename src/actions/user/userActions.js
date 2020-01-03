// import * as Types from "../../constants/actionTypes";
import userAPI from "../../api/userAPI";

export const getUserAccount = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return user.taiKhoan;
};

export const getUserAccessKey = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return user.accessToken;
};

export const signIn = (userData, callback) => {
  userAPI
    .post("/DangNhap", userData)
    .then(res => {
      // save data in localStorage
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      callback(res.data);
    })
    .catch(err => console.log(err));
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
