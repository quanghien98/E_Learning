import * as Types from "../../constants/actionTypes";

const initialState = [];

export const courseListReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_COURSES:
      return action.payload;
    default:
      return state;
  }
};
