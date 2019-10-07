import axios from "axios";

const courseAPI = axios.create({
    baseURL : 'http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/'
})

export default courseAPI
