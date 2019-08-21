import { combineReducers } from 'redux';
import todosReducers from './todosReducers';
import testReducer from './testReducer';
import userReducer from './userReducer';
import getFileUploadReducer from './getFileUploadReducer';
const rootReducer = combineReducers({
  todosReducers,
  testReducer,
  userReducer,
  getFileUploadReducer,
});

export default rootReducer;
