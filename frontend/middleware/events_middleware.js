import { createEvent } from '../util/events_api_util';
import { CREATE_EVENT, receiveEvent } from '../actions/events_actions';


export default({getState, dispatch}) => next => action => {

  switch(action.type){
    case CREATE_EVENT:
      createEvent(action.event, (data) => dispatch(receiveEvent(data)));
      break;
    default:
      next(aciton);
  }
}
