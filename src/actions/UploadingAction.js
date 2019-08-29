import { UPLOADING, ADD_FILE_UPLOAD, UPDATE_PROGRESS_UPLOAD, UPLOAD_SUCESS, CLOSE_PROGRESS } from '../constants/ActionTypes';

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

export function uploadSucess(data) {
  return {
    type: UPLOAD_SUCESS,
    data: data,
  };
}

export function closeProgess(data) {
  return {
    type: CLOSE_PROGRESS,
    data: data,
  };
}
