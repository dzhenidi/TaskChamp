import { connect } from 'react-redux';
import { requestTodos } from '../../actions/todo_actions';
import Project from './project';


const mapStateToProps = ({todo}) => {

  return ({
    todo
  });
}

const mapDispatchToProps = (dispatch) => ({
  requestTodos: () => dispatch(requestTodos())
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);
