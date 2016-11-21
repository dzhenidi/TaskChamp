import { RECEIVE_EVENT, DELETE_EVENT } from '../actions/events_actions'

const EventsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_EVENT:
      const newEvent = {[action.event.id]: action.event}
      return Object.assign({}, state, newEvent)
    default:
      return state;
  }
}

export default EventsReducer;
