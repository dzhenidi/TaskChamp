
export const fetchTodos = success => {
  $.ajax({
    method: 'GET',
    url: 'api/todos',
    success
  });
};

export const fetchTodo = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/todos/${id}`,
    success
  });
};

// export const createTodo = (todo, success, error) => {
//   $.ajax({
//     method: 'POST',
//     url: 'api/todos',
//     data: { todo },
//     success,
//     error
//   });
// };

export const createTodo = (formData, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/todos',
    contentType: false,
    processData: false,
    data: formData,
    success,
    error
  });
};

export const updateTodo = (id, formData, success) => {
  $.ajax({
    method: 'PATCH',
    url: `api/todos/${id}`,
    contentType: false,
    processData: false,
    data: formData,
    success
  });
};

// export const updateTodo = (todo, success) => {
//   $.ajax({
//     method: 'PATCH',
//     url: `api/todos/${todo.id}`,
//     data: { todo },
//     success
//   });
// };

export const destroyTodo = (todo, success) => {
  $.ajax({
    method: 'DELETE',
    url: `api/todos/${todo.id}`,
    success
  });
};
