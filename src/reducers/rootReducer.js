import { combineReducers } from 'redux';
import todosReducers from './todosReducers';
import testReducer from './testReducer';
import userReducer from './userReducer';
import foldersReducer from './folderReducer';
import folderActiveReducer from './folderActiveReducer';
import folderRootReducer from './folderRootReducer';
const rootReducer = combineReducers({
  todosReducers,
  testReducer,
  userReducer,
  foldersReducer,
  folderActiveReducer,
  folderRootReducer,
});

export default rootReducer;
