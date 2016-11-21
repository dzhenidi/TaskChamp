export const createComment = (comment, success, error) => {
  debugger
  $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: { comment },
    success,
    error
  });
};
