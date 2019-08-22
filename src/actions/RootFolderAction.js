import { FETCH_ROOT_FOLDER_PENDING, FETCH_ROOT_FOLDER_SUCCESS, FETCH_ROOT_FOLDER_ERROR } from '../constants/ActionTypes';
export function fetchRootFolderPending() {
  return {
    type: FETCH_ROOT_FOLDER_PENDING,
  };
};

export function fetchRootFolderSuccess(datas) {
  return {
    type: FETCH_ROOT_FOLDER_SUCCESS,
    datas,
  };
}

export function fetchRootFolderError(error) {
  return {
    type: FETCH_ROOT_FOLDER_ERROR,
    error,
  };
};
