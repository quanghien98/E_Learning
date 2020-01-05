import * as Types from "../../constants/actionTypes";

const initialState = true;

export const userLoginStatReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USER_LOGIN_STAT:
      return action.payload;
    default:
      return state;
  }
};
