import { combineReducers } from 'redux';
import todosReducers from './todosReducers';
import testReducer from './testReducer';
import userReducer from './userReducer';
import courseReducer from './courseReducer';
import childFolderReducer from './childFolderReducer';
const rootReducer = combineReducers({
  todosReducers,
  testReducer,
  userReducer,
  courseReducer,
  childFolderReducer,
});

export default rootReducer;
