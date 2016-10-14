import { connect } from 'react-redux';
import { createComment } from '../../actions/comments_actions';
import CommentsIndex from './comments_index';
import { selectComments } from '../../reducers/selectors';

const mapStateToProps = ({comments}, ownProps) => {
  return ({
    comments: selectComments(comments, ownProps.commentIds),
    commentableId: ownProps.commentableId,
    commentableType: ownProps.commentableType
  });
};

const mapDispatchToProps = (dispatch) => ({
  createComment: comment => dispatch(createComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsIndex);
