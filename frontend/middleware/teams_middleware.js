import { REQUEST_TEAM_NAMES, receiveTeamNames } from '../actions/teams_action';
import { fetchTeamNames } from '../util/teams_api_util';

export default ({ getState, dispatch }) => action => next => {

  const successCallback = teams => dispatch(receiveTeamNames(teams));

  switch(action.type){
    case REQUEST_TEAM_NAMES:
      fetchTeamNames(successCallback);
      return next(action);
    default:
      return next(action);
  }

};
