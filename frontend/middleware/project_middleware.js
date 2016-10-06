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
  
}
