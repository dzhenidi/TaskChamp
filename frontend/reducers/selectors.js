import moment from 'moment';

export const selectTodo = (todos, id) => todos[id] || {};

export const selectComments = (comments, commentIds) => {
  return(
  commentIds.map( id => comments[id])
);};

export const sortAscending = (todo) => {
  const todosIdx = Object.keys(todo);
  let todos = todosIdx.map ( idx => todo[idx] );

  let sortableDates = [];
  let now = moment();
  todosIdx.forEach (idx => {
    let dateString;
    if (todo[idx].due_date) {
      dateString = todo[idx].due_date;
    } else if (todo[idx].startDate) {
      dateString = todo[idx].startDate;
    }

    if (dateString) {
      let date = moment(dateString).utc();
      if (date.isAfter(now) || date.isSame(now, 'day')) {
        sortableDates.push([idx, dateString]);
      }
    }
  });
  sortableDates.sort( (a, b) => {
    return new Date(a[1]) - new Date(b[1]);
  });
  let sortedIdx = sortableDates.map( el => el[0] );
  todos = sortedIdx.map ( idx => todo[idx] );
  return todos;
};
