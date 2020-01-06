import * as Types from "../../constants/actionTypes";

const initialState = "";

export const userFullNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USER_FULL_NAME:
      return action.payload;

    default:
      return state;
  }
};
