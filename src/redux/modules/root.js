import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import ping, { epic as pingEpic } from './ping';
import message, { epic as messageEpic } from './message';
// import users, { fetchUserEpic } from './users';

export const rootEpic = combineEpics(
  pingEpic,
  messageEpic,
  // fetchUserEpic
);

export const rootReducer = combineReducers({
  ping,
  message,
  // users
});