import { combineReducers } from "redux";

/* --------- import reducers here -------- */
import { courseListReducer } from "./courseReducers/courseListReducer";
import { searchReducer } from "./searchReducer";
import { course } from "./courseReducers/courseReducer";
// NOTE: import all defined reducers here,
// then provide them to store via combineReducers
// method
/* --------------------------------------- */

const rootReducer = combineReducers({
  courseList: courseListReducer,
  course:course,
  searchField: searchReducer
});

export default rootReducer;
