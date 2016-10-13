export const CREATE_COMMENT = "CREATE_COMMENT";
export const COMMENT_ERROR = "COMMENT_ERROR";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

export const createComment = comment => ({
  type: CREATE_COMMENT,
  comment
});

export const commentError = error => ({
  type: COMMENT_ERROR,
  error
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment: comment
});
