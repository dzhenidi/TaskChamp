export const UPDATE_USER = "UPDATE_USER";

export const updateUser = (id, formData) => ({
  type: UPDATE_USER,
  id,
  formData
});
