import * as Types from "../../constants/actionTypes";

const initialState = {};

export const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USERS:
      return action.payload;

    default:
      return state;
  }
};
