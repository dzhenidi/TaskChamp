import { RECEIVE_PROJECTS,
         RECEIVE_PROJECT,
         REMOVE_PROJECT,
         PROJECT_ERROR
       } from '../actions/project_actions';

const ProjectsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_PROJECTS:
      let newState = {};
      action.projects.forEach(project => newState[project.id] = project);
      return newState;
    case RECEIVE_PROJECT:
      const newProject = {[action.project.id]: action.project};
      return Object.assign({}, state, newProject);
    case REMOVE_PROJECT:
      newState = Object.assign({}, state);
      delete newState[action.project.id];
      return newState;
    case PROJECT_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default ProjectsReducer;

// Sample State
//
// projects: {
//
//   1: {
//     title: "Development",
//     description: null,
//     author_id: 1,
//     completionCount: { totalTodos: 6, completedTodos: 2}
//
//     pending_todos: [],
//     completed_todos: [],
//     comments: []
//
//   }
//
// }
