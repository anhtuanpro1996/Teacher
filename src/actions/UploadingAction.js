import { UPLOADING, ADD_FILE_UPLOAD, UPDATE_PROGRESS_UPLOAD } from '../constants/ActionTypes';

export function getDataUpload(data) {
  console.log('kkk', data);
  return {
    type: UPLOADING,
    data,
  };
}

export function addFileUpload(file) {
  return {
    type: ADD_FILE_UPLOAD,
    file: file,
  };
}

export function updateProgress(data) {
  return {
    type: UPDATE_PROGRESS_UPLOAD,
    data: data,
  };
}

