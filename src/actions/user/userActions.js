import userAPI from "../../api/userAPI";

export const getUserAccessKey = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return user === null ? "" : user.accessToken;
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
