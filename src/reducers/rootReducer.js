import { combineReducers } from 'redux';
import todosReducers from './todosReducers';
import testReducer from './testReducer';
const rootReducer = combineReducers({
  todosReducers,
  testReducer
});

export default rootReducer;
