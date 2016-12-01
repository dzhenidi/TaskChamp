import { RECEIVE_TODO } from '../actions/todo_actions';
import { RECEIVE_COMMENT, COMMENT_ERROR } from '../actions/comments_actions';
import { RECEIVE_PROJECT } from '../actions/project_actions';

const CommentsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_TODO:
      return Object.assign({}, state, action.comments);
    case RECEIVE_PROJECT:
      return Object.assign({}, state, action.project.comments);
    case RECEIVE_COMMENT:
      let newComment = {[action.comment.id]: action.comment};
      return Object.assign({}, state, newComment);
    case COMMENT_ERROR:
      // alert(action.error);
      break;
    default:
      return state;
  }
};

export default CommentsReducer;
