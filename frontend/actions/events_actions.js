export const CREATE_EVENT = "CREATE_EVENT";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENT_ID = "RECEIVE_EVENT_ID";
export const DELETE_EVENT = "DELETE_EVENT";
export const FETCH_EVENT = "FETCH_EVENT";
export const REQUEST_EVENTS = "REQUEST_EVENTS";
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";


export const createEvent = data => ({
  type: CREATE_EVENT,
  event: data
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const receiveEventId = id => ({
  type: RECEIVE_EVENT_ID,
  id
});

export const deleteEvent = id => ({
  type: DELETE_EVENT,
  id
});

export const fetchEvent = id => ({
  type: FETCH_EVENT,
  id
});

export const requestEvents = () => ({
  type: REQUEST_EVENTS
});

export const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});
