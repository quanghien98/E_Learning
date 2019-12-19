import axios from "axios";

const userAPI = axios.create({
  baseURL: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung"
});

export default userAPI;
