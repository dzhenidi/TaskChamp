import { connect }         from 'react-redux';
import { requestTodos }    from '../../actions/todo_actions';
import { requestEvents }   from '../../actions/events_actions';
import { sortAscending } from '../../reducers/selectors';
import   Schedule          from './schedule';

const mapStateToProps = ({todo, events}) => {
  let todosSorted = sortAscending(todo);
  let eventsSorted = sortAscending(events);
  return ({
    todosSorted,
    eventsSorted
  });
};

const mapDispatchToProps = (dispatch) => ({
  requestTodos: () => dispatch(requestTodos()),
  requestEvents: () => dispatch(requestEvents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedule);
