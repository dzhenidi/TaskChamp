import SessionMiddleware from './session_middleware';
import TeamsMiddleware from './teams_middleware';
import TodosMiddleware from './todo_middleware';
import ProjectsMiddleware from './project_middleware';
import CommentsMiddleware from './comments_middleware';
import UserMiddleware from './user_middleware';
import { applyMiddleware } from 'redux';

const logger = ({ getState, dispatch }) => next => action => {
  const result = next(action);
  return result;
};

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TeamsMiddleware,
  TodosMiddleware,
  ProjectsMiddleware,
  CommentsMiddleware,
  UserMiddleware,
  logger
);

export default RootMiddleware;
