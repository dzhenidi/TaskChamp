import {  fetchProjects,
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


export default ({getState, dispatch}) => next => action => {
  const projectsSuccess = data => dispatch(receiveProjects(data));
  const projectSuccess = data => dispatch(receiveProject(data));
  const projectErrored = data => dispatch(projectError(data.responseJSON));

  switch(action.type) {
    case REQUEST_PROJECTS:
      fetchProjects(projectsSuccess);
      next(action);
    case REQUEST_PROJECT:
      fetchProject(projectsSuccess);
      next(action);
    case CREATE_PROJECT:
      createProject(action.project, projectsSuccess, projectErrored);
      next(action);
    case UPDATE_PROJECT:
      updateProject(action.project, projectSuccess)
      next(action);
    case DESTROY_PROJECT:
      destroyProject(action.project);
      next(action);
    default:
      next(action);
  }
};
