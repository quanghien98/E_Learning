import * as Types from "../constants/actionTypes";

const initialState = "";

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_SEARCH_FIELD:
      return action.payload;

    default:
      return state;
  }
};
