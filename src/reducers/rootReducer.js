import { combineReducers } from 'redux';
import todosReducers from './todosReducers';
import testReducer from './testReducer';
import userReducer from './userReducer';
import childFolderReducer from './childFolderReducer';
const rootReducer = combineReducers({
  todosReducers,
  testReducer,
  userReducer,
  childFolderReducer,
});

export default rootReducer;
