import { createEvent, deleteEvent, fetchEvent } from '../util/events_api_util';
import {
  RECEIVE_EVENT,
  RECEIVE_EVENT_ID,
  DELETE_EVENT,
  CREATE_EVENT,
  FETCH_EVENT,
  receiveEvent,
  receiveEventId } from '../actions/events_actions';
import { hashHistory } from 'react-router';

export default({getState, dispatch}) => next => action => {
  const successCreate = (data) => dispatch(receiveEventId(data));
  const successFetch = (data) => dispatch(receiveEvent(data));
  switch(action.type){
    case CREATE_EVENT:
      createEvent(action.event, successCreate);
      break;
    case DELETE_EVENT:
      deleteEvent(action.id, () => next(action));
    case RECEIVE_EVENT_ID:
      hashHistory.push(`/events/${action.id}`);
    case FETCH_EVENT:
      fetchEvent(action.id, successFetch);
      break;
    default:
      next(action);
  }
};
