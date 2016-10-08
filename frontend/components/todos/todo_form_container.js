import { connect } from 'react-redux';
import TodoForm  from './todo_form';
import { createTodo } from '../../actions/todo_actions';


const mapStateToProps = ({session}) => {
  return({
    currentUser: session.currentUser
  })
}

const mapDispatchToProps = (dispatch) => ({
  createTodo: todo => dispatch(createTodo(todo))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
