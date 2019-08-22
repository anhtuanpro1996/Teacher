import { GET_FOLDER_LIST } from '../constants/ActionTypes';

const initialState = {
  folders: [
  ],
  loading: false,
};

export default function foldersReducer(state = initialState, action) {
  switch (action.type) {
  case GET_FOLDER_LIST:
    return {...state, folders: action.folders, loading: true};
  default:
    return state;
  }
}
