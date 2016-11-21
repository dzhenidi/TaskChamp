import { createEvent, deleteEvent } from '../util/events_api_util';
import { DELETE_EVENT, CREATE_EVENT, receiveEvent } from '../actions/events_actions';


export default({getState, dispatch}) => next => action => {
  const success = (data) => dispatch(receiveEvent(data));
  switch(action.type){
    case CREATE_EVENT:
      createEvent(action.event, success);
      break;
    case DELETE_EVENT:
      deleteEvent(action.id, () => next(action))
    default:
      next(action);
  }
};
