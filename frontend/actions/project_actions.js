export const REQUEST_PROJECTS = "REQUEST_PROJECTS";
export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const REQUEST_PROJECT = "REQUEST_PROJECT";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const CREATE_PROJECT = "CREATE_PROJECT";
export const DESTROY_PROJECT = "DESTROY_PROJECT";
export const PROJECT_ERROR = "PROJECT_ERROR";

export const requestProjects = () => ({
  type: REQUEST_PROJECTS
});

export const requestProject = id => ({
  type: REQUEST_PROJECT,
  id
});

export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

export const createProject = project => ({
  type: CREATE_PROJECT,
  project
});

export const updateProject = project => ({
  type: UPDATE_PROJECT,
  project
});

export const destroyProject = project => ({
  type: DESTROY_PROJECT,
  project
});

export const projectError = error => ({
  type: PROJECT_ERROR,
  error
});
