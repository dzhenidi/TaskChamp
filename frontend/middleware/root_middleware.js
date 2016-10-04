import SessionMiddleware from './session_middleware';
import { applyMiddleware } from 'redux';

const logger = ({ getState, dispatch }) => next => action => {
  console.log("state: ", getState());
  console.log("action: ", action);

  const result = next(action);
  console.log("state: ", getState());
  return result;
};

const RootMiddleware = applyMiddleware(
  SessionMiddleware, logger
);

export default RootMiddleware;
