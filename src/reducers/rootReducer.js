import { combineReducers } from "redux";

/* --------- import reducers here -------- */
import { courseListReducer } from "./courseReducers/courseListReducer";
import { coursesByCategoryReducer } from "./courseReducers/coursesByCategoryReducer";
import { searchReducer } from "./searchReducers/searchFieldReducer";
// NOTE: import all defined reducers here,
// then provide them to store via combineReducers
// method
/* --------------------------------------- */

const rootReducer = combineReducers({
  courseList: courseListReducer,
  searchField: searchReducer,
  coursesByCategory: coursesByCategoryReducer
});

export default rootReducer;
