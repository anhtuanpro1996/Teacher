import { FETCH_ROOT_FOLDER_PENDING, FETCH_ROOT_FOLDER_SUCCESS, FETCH_ROOT_FOLDER_ERROR } from '../constants/ActionTypes';

const folderRootInitialState = {
  pending: false,
  datas: [],
  error: null,
};
const folderRootReducer = (state = folderRootInitialState, action) => {
  switch (action.type) {
  case FETCH_ROOT_FOLDER_PENDING:
    return {
      ...state,
      pending: true,
    };
  case FETCH_ROOT_FOLDER_SUCCESS:
    return {
      ...state,
      pending: false,
      datas: action.datas,
    };
  case FETCH_ROOT_FOLDER_ERROR:
    return {
      ...state,
      pending: false,
      error: action.error,
    };
  default:
    return state;
  }
};

export default folderRootReducer;
