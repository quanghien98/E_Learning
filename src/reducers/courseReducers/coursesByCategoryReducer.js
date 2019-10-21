import * as Types from "../../constants/actionTypes";

const initialState = [];

export const coursesByCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_COURSES_BY_CATEGORY:
      const coursesByCategory = action.payload;
      return coursesByCategory;
    default:
      return state;
  }
};
