import { connect }         from 'react-redux';
import { requestTodos }    from '../../actions/todo_actions';
import { requestEvents }   from '../../actions/events_actions';
import { sortedAscending } from '../../reducers/selectors';
import   Schedule          from './schedule';

const mapStateToProps = ({todo, events}) => {
  let todos = sortedAscending(todo);
  let eventsSorted = sortedAscending(events);
  return ({
    todos,
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
