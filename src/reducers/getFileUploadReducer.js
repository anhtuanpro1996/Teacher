import { UPLOADING, ADD_FILE_UPLOAD, UPDATE_PROGRESS_UPLOAD } from '../constants/ActionTypes';

const initialState = [
];

export default function getFileUploadReducer(state = initialState, action) {
  switch (action.type) {
  case ADD_FILE_UPLOAD:
    console.log('file', action.file.name);
    return [{
      uploading: false,
      file: action.file,
      progress: 0,
    }, ...state];
  case UPDATE_PROGRESS_UPLOAD:
    return state.map((todo,index) => index === action.data.indx ? { ...todo, progress: action.data.progress } : todo);
  default:
    return state;
  }
}
