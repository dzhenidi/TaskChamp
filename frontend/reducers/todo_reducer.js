import { RECEIVE_TODOS,
         RECEIVE_TODO,
         REMOVE_TODO,
         TODO_ERROR
       } from '../actions/todo_actions';

const TodosReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.forEach(todo => newState[todo.id] = todo);
      return newState;
    case RECEIVE_TODO:
      const newTodo = {[action.todo.id]: action.todo};
      return Object.assign({}, state, newTodo);
    case REMOVE_TODO:
      newState = Object.assign({}, state);
      delete newState[action.todo.id];
      return newState;
    case TODO_ERROR:
      alert(action.error);
      break;
    default:
      return state;
  }
};

export default TodosReducer;


// Sample State
//
// 1: {
//   title: "make wireframes",
//   description: null,
//   author: username,
//   todoer: username,
//   done: false,
//   completed_at: null,
//   dueDate: "10/03/2016",
//   timestamp :"10/1/2016 3:45PM",
//   project: "projectName",
//   project_id: 1,
// }
