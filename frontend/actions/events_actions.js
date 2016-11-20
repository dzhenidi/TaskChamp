export const CREATE_EVENT = "CREATE_EVENT";
export const RECEIVE_EVENT = "RECEIVE_EVENT";

export const createEvent = event => ({
  type: CREATE_EVENT,
  event
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});
