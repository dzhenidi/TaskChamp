export const selectTodo = (todos, id) => todos[id] || {};

export const selectComments = (comments, commentIds) => {
  return(
  commentIds.map( id => comments[id])
);};

export const sortedAscending = (todo) => {
  const todosIdx = Object.keys(todo);
  let todos = todosIdx.map ( idx => todo[idx] );
  let sortableDates = todosIdx.map (idx => {
    if (todo[idx].dueMonth) {
      return [idx, todo[idx].due_date];
    } else if (todo[idx].startDate) {
      return [idx, todo[idx].startDate];
    }
  });
  sortableDates.sort( (a, b) => {
    return new Date(a[1]) - new Date(b[1]);
  });
  sortableDates = sortableDates.filter( el => el !== undefined);
  let sortedIdx = sortableDates.map( el => el[0] );
  todos = sortedIdx.map ( idx => todo[idx] );
  return todos;
};



// export const sortedAscending = (todo) => {
//   const todosIdx = Object.keys(todo);
//   let todos = todosIdx.map ( idx => todo[idx] );
//   let sortableDates = todosIdx.map (idx => {
//     if (todo[idx].dueMonth) {
//       return [idx, todo[idx].due_date];
//     }
//   });
//   sortableDates.sort( (a, b) => {
//     return new Date(a[1]) - new Date(b[1]);
//   });
//   sortableDates = sortableDates.filter( el => el !== undefined);
//   let sortedIdx = sortableDates.map( el => el[0] );
//   todos = sortedIdx.map ( idx => todo[idx] );
//   return todos;
// };
