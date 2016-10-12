import { connect } from 'react-redux';
import TodoForm  from './todo_form';
import { createTodo, updateTodo } from '../../actions/todo_actions';


const mapStateToProps = ({session}) => {
  return({
    teammates: session.currentUser.teammates
  })
}

const mapDispatchToProps = (dispatch) => ({
  createTodo: todo => dispatch(createTodo(todo)),
  updateTodo: todo => dispatch(updateTodo(todo))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
