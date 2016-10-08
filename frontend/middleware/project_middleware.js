import { fetchProjects,
         fetchProject,
         createProject,
         updateProject,
         destroyProject
       } from '../util/project_api_util';

import { requestProjects,
        receiveProject,
        receiveProjects,
        removeProject,
        projectError,
        REQUEST_PROJECTS,
        REQUEST_PROJECT,
        CREATE_PROJECT,
        UPDATE_PROJECT,
        DESTROY_PROJECT
      } from '../actions/project_actions';
import { RECEIVE_TODO } from '../actions/todo_actions'

export default ({getState, dispatch}) => next => action => {
  const projectsSuccess = data => dispatch(receiveProjects(data));
  const projectSuccess = data => dispatch(receiveProject(data));
  const projectErrored = data => dispatch(projectError(data.responseJSON));

  switch(action.type) {
    case REQUEST_PROJECTS:
      fetchProjects(projectsSuccess);
      break;
    case REQUEST_PROJECT:
      fetchProject(action.id, projectSuccess);
      break;
    case CREATE_PROJECT:
      createProject(action.project, projectsSuccess, projectErrored);
      break;
    case UPDATE_PROJECT:
      updateProject(action.project, projectSuccess)
      break;
    case DESTROY_PROJECT:
      destroyProject(action.project);
      break;
    default:
      next(action);
  }
};
