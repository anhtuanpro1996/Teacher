import { UPLOADING, ADD_FILE_UPLOAD, UPDATE_PROGRESS_UPLOAD, UPLOAD_SUCESS } from '../constants/ActionTypes';

const initialState = [
];

export default function getFileUploadReducer(state = initialState, action) {
  switch (action.type) {
  case ADD_FILE_UPLOAD:
    console.log('file', action.file.name);
    return [{
      uploading: null,
      file: action.file,
      progress: 0,
    }, ...state];
  case UPDATE_PROGRESS_UPLOAD:
    return state.map((todo,index) => index === action.data.indx ? { ...todo, progress: action.data.progress } : todo);
  case UPLOAD_SUCESS:
    return state.map((todo,index) => index === action.data.indx ? { ...todo, uploading: action.data.upload } : todo);
  default:
    return state;
  }
}
