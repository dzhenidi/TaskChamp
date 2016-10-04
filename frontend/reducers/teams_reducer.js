import { RECEIVE_TEAM_NAMES } from '../actions/teams_action';

const TeamsReducer = function(state = {}, action){
  switch(action.type){
    case RECEIVE_TEAM_NAMES:
      return action.teams;
    default:
      return state;
  }
};

export default TeamsReducer;
