export const REQUEST_TEAM_NAMES = "REQUEST_TEAM_NAMES";
export const RECEIVE_TEAM_NAMES = "RECEIVE_TEAM_NAMES";


export const requestTeamNames = () => ({
  type: REQUEST_TEAM_NAMES
});

export const receiveTeamNames = (teamNames) => ({
  type: RECEIVE_TEAM_NAMES,
  teamNames
});
