import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TeamsReducer from './teams_reducer';
import TodoReducer from './todo_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  teams: TeamsReducer,
  todo: TodoReducer,
});

export default RootReducer;
