import SessionMiddleware from './session_middleware';
import TeamsMiddleware from './teams_middleware';
import TodosMiddleware from './todo_middleware';
import ProjectsMiddleware from './project_middleware';
import CommentsMiddleware from './comments_middleware';
import UserMiddleware from './user_middleware';
import { applyMiddleware } from 'redux';

const logger = store => next => action => {
  console.log('Action received:', action);
  console.log('State pre-dispatch:', store.getState());

  const result = next(action);

  console.log('State post-dispatch:', store.getState());
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
