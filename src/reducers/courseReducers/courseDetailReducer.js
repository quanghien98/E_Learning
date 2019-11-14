import * as Types from "../../constants/actionTypes";

const initialState = {};

export const courseDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_COURSE_DETAILS:
      return action.payload;
    default:
      return state;
  }
};