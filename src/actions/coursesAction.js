import * as Types from "../constants/actionTypes"

import courseAPI from "../api/courseAPI"

export const getCourse = () => {
    // Đây là mapDispatchToProps
    return (dispatch) => {
        courseAPI
            .get("LayDanhSachKhoaHoc?maKhoaHoc=GP01")
            .then(res => {
                // Có applyMiddleware(thunk) là sẽ đợi api chạy xong mới dispatch lên store
                dispatch({
                    type: Types.GET_COURSE,
                    payload: res.data,
                })

            })
            .catch(err => console.log(err))
    }
}