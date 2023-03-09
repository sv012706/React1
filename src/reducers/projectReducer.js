import { GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from "../actions/types";

const initialState = {
  projects: [],
  project: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state, //"..." is an operator will combine new data with old data
        projects: action.payload, //storing all projects in projects var
      };

    case GET_PROJECT:
      return {
        ...state, //"..." is an operator will combine new data with old data
        project: action.payload, //storing all projects in projects var
      };

    case DELETE_PROJECT:
      return {
        ...state, //"..." is an operator will combine new data with old data
        projects: state.projects.filter(
          (project) => project.projectIdentifier !== action.payload
        ),
      };
    default:
      return state;
  }
}
