import { UPLOADING } from '../constants/getUploadFileTypes';

const initialState = [{
  uploading: false,
  infofiles: {},
}];

export default function getFileUploadReducer(state = initialState, action) {
  switch (action.type) {
  case UPLOADING:
    return [{
      uploading: true,
      infofiles: action.data,
    }, ...state];
  default:
    return state;
  }
}
