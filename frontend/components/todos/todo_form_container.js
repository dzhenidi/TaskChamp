import { connect } from 'react-redux';
import TodoForm  from './todo_form';
import { createTodo, updateTodo } from '../../actions/todo_actions';


const mapStateToProps = ({session}) => {
  if (session.currentUser) {
    return({
      teammates: session.currentUser.teammates
    })
  } else {
    return {
      teammates: {}
    }
  }

}

const mapDispatchToProps = (dispatch) => ({
  createTodo: todo => dispatch(createTodo(todo)),
  updateTodo: (id, formData) => dispatch(updateTodo(id, formData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
