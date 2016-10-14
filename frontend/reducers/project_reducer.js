import { RECEIVE_PROJECTS,
         RECEIVE_PROJECT,
         REMOVE_PROJECT,
         PROJECT_ERROR
       } from '../actions/project_actions';

import { RECEIVE_TODO } from '../actions/todo_actions';
import { RECEIVE_COMMENT } from '../actions/comments_actions';

const ProjectsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_PROJECTS:
      let newState = {};
      action.projects.forEach(project => newState[project.id] = project);
      return newState;
    case RECEIVE_PROJECT:
      let newProject = {[action.project.project.id]: action.project.project};
      return Object.assign({}, state, newProject);
    case REMOVE_PROJECT:
      newState = Object.assign({}, state);
      delete newState[action.project.id];
      return newState;
    case RECEIVE_TODO:
      if (state[action.todo.project_id]) {
        newProject = Object.assign({}, state[action.todo.project_id]);
        newProject.todos[action.todo.id] = action.todo;
        return Object.assign({}, state, {[action.todo.project_id]: newProject});
      } else {
        return state;
      }
    case PROJECT_ERROR:
      alert(action.error);
      break;
    case RECEIVE_COMMENT:
      if (action.comment.commentable_type === 'Project') {

        let projectId = action.comment.commentable_id;
        newProject = Object.assign({}, state[projectId]);
        let newCommentIds = newProject.commentIds.concat(action.comment.id);
        newProject.commentIds = newCommentIds;
        return Object.assign({}, state, {[projectId]: newProject});
      } else {
        return state;
      }
    default:
      return state;
  }
};

// export default function completedTodos(state, projectId) {
//
// }
//
// export default function pendingTodos(state, projectId) {
//
// }

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
//     todos: { 1: {}, 2:{}}
//     comments: []
//
//   }
//
// }
// case RECEIVE_TODO:
//   newTodo = {[action.todo.id]: action.todo};
//   newProject = Object.assign({}, state[action.todo.project_id]);
//   newProject.todos[action.todo.id] = newTodo;
//   return Object.assign({}, state, {[action.todo.project_id]: newProject});
