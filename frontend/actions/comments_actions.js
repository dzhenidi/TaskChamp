export const CREATE_COMMENT = "CREATE_COMMENT";
export const COMMENT_ERROR = "COMMENT_ERROR";


export const createComment = comment => ({
  type: CREATE_COMMENT,
  comment
});

export const commentError = error => ({
  type: COMMENT_ERROR,
  error
});
