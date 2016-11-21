import { createEvent, deleteEvent } from '../util/events_api_util';
import { RECEIVE_EVENT, DELETE_EVENT, CREATE_EVENT, receiveEvent } from '../actions/events_actions';
import { hashHistory } from 'react-router';

export default({getState, dispatch}) => next => action => {
  const success = (data) => dispatch(receiveEvent(data));
  switch(action.type){
    case CREATE_EVENT:
      createEvent(action.event, success);
      break;
    case DELETE_EVENT:
      deleteEvent(action.id, () => next(action))
    case RECEIVE_EVENT:
      hashHistory.push(`/events/${action.event.id}`)  
    default:
      next(action);
  }
};
