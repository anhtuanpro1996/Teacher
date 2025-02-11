import { combineReducers } from 'redux';
import todosReducers from './todosReducers';
import testReducer from './testReducer';
import userReducer from './userReducer';
import getFileUploadReducer from './getFileUploadReducer';
import courseReducer from './courseReducer';
import childFolderReducer from './childFolderReducer';
import contextFileReducer from './contextFileReducer';
import listFolderForContextReducer from './contextMoveFileReducer';
const rootReducer = combineReducers({
  todosReducers,
  testReducer,
  userReducer,
  getFileUploadReducer,
  courseReducer,
  childFolderReducer,
  contextFileReducer,
  listFolderForContextReducer,
});

export default rootReducer;
