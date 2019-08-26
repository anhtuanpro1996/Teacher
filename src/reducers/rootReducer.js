import { combineReducers } from 'redux';
import todosReducers from './todosReducers';
import testReducer from './testReducer';
import userReducer from './userReducer';
import foldersReducer from './folderReducer';
import folderActiveReducer from './folderActiveReducer';
import courseReducer from './courseReducer';
import childFolderReducer from './childFolderReducer';
const rootReducer = combineReducers({
  todosReducers,
  testReducer,
  userReducer,
  foldersReducer,
  folderActiveReducer,
  courseReducer,
  childFolderReducer,
});

export default rootReducer;
