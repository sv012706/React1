import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";
export default combineReducers({
  //error is a props
  //errorReducer is holding state of error stored inside props error(local)
  //so now we have to push thr props error to the add project func
  errors: errorReducer,
  projects: projectReducer, //getting all projects in props- 'projects' from projectReducer
});
