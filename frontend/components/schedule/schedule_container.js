import { connect } from 'react-redux';
import { requestTodos } from '../../actions/todo_actions';
import { requestEvents } from '../../actions/events_actions';
import Schedule from './schedule';
import { sortedAscending } from '../../reducers/selectors';

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
