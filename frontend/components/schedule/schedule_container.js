import { connect } from 'react-redux';
import { requestTodos } from '../../actions/todo_actions';
import Schedule from './schedule';

const mapStateToProps = ({todo}) => {
  let todosIdx = Object.keys(todo)
  let todos = todosIdx.map ( idx => todo[idx] )
  return {
    todos
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestTodos: () => dispatch(requestTodos())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedule)
