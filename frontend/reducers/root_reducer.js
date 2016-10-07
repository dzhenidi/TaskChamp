import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TeamsReducer from './teams_reducer';
import TodoReducer from './todo_reducer';
import ProjectsReducer from './project_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  teams: TeamsReducer,
  todo: TodoReducer,
  projects: ProjectsReducer,
});

export default RootReducer;
