import { RECEIVE_CURRENT_USER, LOGOUT, RECEIVE_ERRORS } from '../actions/session_action';
import merge from 'lodash/merge';

const _defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = function(state = _defaultState, action){
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.user;
      return merge({}, _defaultState, { currentUser });
    case LOGOUT:
      return _defaultState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      const receivedErrors = merge({}, _defaultState, { errors });
      return receivedErrors;
    default:
      return state;
  }
};

export default SessionReducer;
