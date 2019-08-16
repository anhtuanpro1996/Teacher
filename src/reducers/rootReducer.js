import { combineReducers } from 'redux';
import todosReducers from './todosReducers';
import testReducer from './testReducer';
import userReducer from './userReducer';
import foldersReducer from './folderReducer';
const rootReducer = combineReducers({
  todosReducers,
  testReducer,
  userReducer,
  foldersReducer,
});

export default rootReducer;
