export const selectTodo = (todos, id) => todos[id] || {};
export const selectComments = (comments, commentIds) => {
  if (!commentIds) {
    let commentIds = []
  }

  return(
  commentIds.map( id => comments[id])
);};
