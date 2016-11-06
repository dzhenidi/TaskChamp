import { UPDATE_USER } from '../actions/user_actions';
import { updateUser } from '../util/user_api_util';
import { receiveCurrentUser } from '../actions/session_action';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  switch(action.type) {
    case UPDATE_USER:
      updateUser(action.user, successCallback);
      return next(action);
    default:
      return next(action);
  }
};
