import { combineReducers } from "redux";

/* --------- import reducers here -------- */
import { courseListReducer } from "./courseReducers/courseListReducer";
// NOTE: import all defined reducers here,
// then provide them to store via combineReducers
// method
/* --------------------------------------- */

const rootReducer = combineReducers({
  courses: courseListReducer,
  courseDetails: "",
  currentUser: "",
  users: ""
});
