import {
  RECEIVE_EVENT,
  RECEIVE_EVENTS,
  DELETE_EVENT
        } from '../actions/events_actions';

const EventsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_EVENT:
      const newEvent = {[action.event.id]: action.event};
      return Object.assign({}, state, newEvent);
    case RECEIVE_EVENTS:
      let newState = {};
      action.events.forEach(event => newState[event.id] = event);
      return newState;
    default:
      return state;
  }
};

export default EventsReducer;
