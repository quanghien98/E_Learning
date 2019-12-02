import * as Types from "../../constants/actionTypes";

const initialState = {};

export const selectedCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SELECT_COURSE:
      return action.payload;

    default:
      return state;
  }
};
