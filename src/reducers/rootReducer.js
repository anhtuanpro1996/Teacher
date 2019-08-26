import { combineReducers } from 'redux';
import todosReducers from './todosReducers';
import testReducer from './testReducer';
import userReducer from './userReducer';
import getFileUploadReducer from './getFileUploadReducer';
import childFolderReducer from './childFolderReducer';
const rootReducer = combineReducers({
  todosReducers,
  testReducer,
  userReducer,
  getFileUploadReducer,
  childFolderReducer,
});

export default rootReducer;
