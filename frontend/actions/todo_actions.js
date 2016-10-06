export const REQUEST_TODOS = "REQUEST_TODOS";
export const REQUEST_TODO = "REQUEST_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const CREATE_TODO = "CREATE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DESTROY_TODO = "DESTROY_TODO";
export const TODO_ERROR = "TODO_ERROR";

export const requestTodos = () => ({
  type: REQUEST_TODOS
});

export const requestTodo = id => ({
  type: REQUEST_TODO,
  id
});

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});

export const createTodo = todo => ({
  type: CREATE_TODO,
  todo
});

export const updateTodo = todo => ({
  type: UPDATE_TODO,
  todo
});

export const destroyTodo = todo => ({
  type: DESTROY_TODO,
  todo
});

export const todoError = error => ({
  type: TODO_ERROR,
  error
});
