export const REQUEST_TEAM_NAMES = "REQUEST_TEAM_NAMES";
export const RECEIVE_TEAM_NAMES = "RECEIVE_TEAM_NAMES";


export const requestTeamNames = (onEnterCallback) => ({
  type: REQUEST_TEAM_NAMES,
  onEnterCallback
});

export const receiveTeamNames = (teamNames) => ({
  type: RECEIVE_TEAM_NAMES,
  teamNames
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
