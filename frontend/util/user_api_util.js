export const updateUser = (id, formData, success) => {
  $.ajax({
    url: `api/users/${id}`,
    method: 'PATCH',
    contentType: false,
    processData: false,
    data: formData,
    success
  });
};
