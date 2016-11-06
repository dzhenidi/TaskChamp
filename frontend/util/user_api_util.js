export const updateUser = (user, success) => {
  $.ajax({
    url: 'api/users',
    method: 'PATCH',
    data: { user },
    success
  });
};
