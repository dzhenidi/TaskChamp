import { connect } from 'react-redux';
import { requestProjects } from '../../actions/project_actions';
import ProjectsIndex from './project_index';


const mapStateToProps = ({projects, session}) => {

  return ({
    projects,
    currentUser: session.currentUser
  });
}

const mapDispatchToProps = (dispatch) => ({
  requestProjects: () => dispatch(requestProjects())
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsIndex);
