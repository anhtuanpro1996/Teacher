import { combineReducers } from 'redux';
import todosReducers from './todosReducers';
import testReducer from './testReducer';
import userReducer from './userReducer';
const rootReducer = combineReducers({
  todosReducers,
  testReducer,
  userReducer,
});

export default rootReducer;
