import { SELECT_FOLDER } from '../constants/ActionTypes';

const folderActiveInitialState = {};
const folderActiveReducer = (state = folderActiveInitialState, action) => {
  switch (action.type) {
  case SELECT_FOLDER:
    return action.payload;
  default:
    return state;
  }
};

export default folderActiveReducer;
