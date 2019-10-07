import { combineReducers } from "redux";

/* --------- import reducers here -------- */
import { courseListReducer } from "./courseReducers/courseListReducer";
import { searchReducer } from "./searchReducer";
// NOTE: import all defined reducers here,
// then provide them to store via combineReducers
// method
/* --------------------------------------- */

const rootReducer = combineReducers({
  courseList: courseListReducer,
  searchField: searchReducer
});

export default rootReducer;
