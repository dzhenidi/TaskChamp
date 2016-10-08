import { connect } from 'react-redux';
import { requestProjects, createProject } from '../../actions/project_actions';
import { createTodo, updateTodo } from '../../actions/todo_actions';
import ProjectsIndex from './project_index';


const mapStateToProps = ({projects, session}) => {

  return ({
    projects,
    currentUser: session.currentUser
  });
}



const mapDispatchToProps = (dispatch) => ({
  requestProjects: () => dispatch(requestProjects()),
  createProject: project => dispatch(createProject(project)),
  // createTodo: todo => dispatch(createTodo(todo)),
  toggleTodo: todo => {
    const toggledTodo = Object.assign({}, todo, {
      done: !todo.done
    });
    dispatch(updateTodo(toggledTodo));
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsIndex);


// toggleTodo: todo => () => {
//   const toggledTodo = Object.assign({}, todo, {
//     done: !todo.done
//   });
//   dispatch(updateTodo(toggledTodo));
// }
