import { connect } from 'react-redux';
import { requestTodos } from '../../actions/todo_actions';
import Schedule from './schedule';
import { sortedAscending } from '../../reducers/selectors';

const mapStateToProps = ({todo}) => {
  let todos = sortedAscending(todo);
  return { todos };
};

const mapDispatchToProps = (dispatch) => ({
  requestTodos: () => dispatch(requestTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedule);
