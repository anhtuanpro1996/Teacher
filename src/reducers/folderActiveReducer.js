import { SELECT_FOLDER } from '../constants/ActionTypes';

const folderActiveInitialState = {
  data: {},
  isClick: false,
};
const folderActiveReducer = (state = folderActiveInitialState, action) => {
  switch (action.type) {
  case SELECT_FOLDER:
    return {...folderActiveInitialState, data: action.payload, isClick: true};
  default:
    return state;
  }
};

export default folderActiveReducer;
