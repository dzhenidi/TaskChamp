export const CREATE_EVENT = "CREATE_EVENT";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const FETCH_EVENT = "FETCH_EVENT";

export const createEvent = data => ({
  type: CREATE_EVENT,
  event: data
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const deleteEvent = id => ({
  type: DELETE_EVENT
});

export const fetchEvent = id => ({
  type: FETCH_EVENT,
  id
});
