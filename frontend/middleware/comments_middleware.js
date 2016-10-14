import { createComment } from '../util/comments_api_util';
import { CREATE_COMMENT, commentError, receiveComment  } from '../actions/comments_actions';

export default ({getState, dispatch}) => next => action => {
  const commentSuccess = data => dispatch(receiveComment(data));
  const commentErrored = data => dispatch(commentError(data.responseJSON));
  switch(action.type) {
    case CREATE_COMMENT:
      createComment(action.comment, commentSuccess, commentErrored)
      break;
    default:
      next(action);
  }
}
