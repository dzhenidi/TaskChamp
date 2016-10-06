
export const fetchProjects = success => {
  $.ajax({
    method: 'GET',
    url: 'api/projects',
    success
  });
};

export const fetchProject = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/projects/${id}`,
    success
  });
};

export const createProject = (project, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/projects',
    data: project,
    success,
    error
  });
};

export const updateProject = (project, success) => {
  $.ajax({
    method: 'PATCH',
    url: `api/projects/${project.id}`,
    data: { project },
    success
  });
};

export const destroyProject = (project, success) => {
  $.ajax({
    method: 'DELETE',
    url: `api/projects/${project.id}`,
    success
  });
};
