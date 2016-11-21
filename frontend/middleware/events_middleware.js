import { createEvent, deleteEvent } from '../util/events_api_util';
import { DELETE_EVENT, CREATE_EVENT, receiveEvent } from '../actions/events_actions';


export default({getState, dispatch}) => next => action => {

  switch(action.type){
    case CREATE_EVENT:
    debugger
      createEvent(action.event, (data) => dispatch(receiveEvent(data)));
      break;
    case DELETE_EVENT:
      deleteEvent(action.id, () => next(action))
    default:
      next(action);
  }
};
