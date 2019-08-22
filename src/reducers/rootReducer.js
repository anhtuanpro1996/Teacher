import { combineReducers } from 'redux';
import todosReducers from './todosReducers';
import testReducer from './testReducer';
import userReducer from './userReducer';
import foldersReducer from './folderReducer';
import folderActiveReducer from './folderActiveReducer';
const rootReducer = combineReducers({
  todosReducers,
  testReducer,
  userReducer,
  foldersReducer,
  folderActiveReducer,
});

export default rootReducer;
