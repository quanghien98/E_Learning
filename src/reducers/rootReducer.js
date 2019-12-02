import { combineReducers } from "redux";

/* --------- import reducers here -------- */
import { courseListReducer } from "./courseReducers/courseListReducer";
import { coursesByCategoryReducer } from "./courseReducers/coursesByCategoryReducer";
import { selectedCourseReducer } from "./courseReducers/selectedCourseReducer";
import { searchReducer } from "./searchReducers/searchFieldReducer";
import { courseDetailsReducer } from "./courseReducers/courseDetailsReducer";
// NOTE: import all defined reducers here,
// then provide them to store via combineReducers
// method
/* --------------------------------------- */

const rootReducer = combineReducers({
  courseList: courseListReducer,
  searchField: searchReducer,
  coursesByCategory: coursesByCategoryReducer,
  selectedCourse: selectedCourseReducer,
  courseDetails: courseDetailsReducer
});

export default rootReducer;
