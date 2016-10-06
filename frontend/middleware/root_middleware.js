import SessionMiddleware from './session_middleware';
import TeamsMiddleware from './teams_middleware';
import TodosMiddleware from './todo_middleware';
import { applyMiddleware } from 'redux';

const logger = ({ getState, dispatch }) => next => action => {
  console.log("state: ", getState());
  console.log("action: ", action);

  const result = next(action);
  console.log("state: ", getState());
  return result;
};

const RootMiddleware = applyMiddleware(
  logger,
  SessionMiddleware,
  TeamsMiddleware,
  TodosMiddleware
);

export default RootMiddleware;
