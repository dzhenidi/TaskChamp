export const fetchTeamNames = (success) => {
  $.ajax({
    url: 'api/teams',
    method: 'GET',
    success
  });
};
