import * as URL from '../constants/Url';
import axios from 'axios';
import { GET_FOLDER_LIST, SELECT_FOLDER } from '../constants/ActionTypes';

export function fetchFoldersSuccess(folders) {
  return { type: GET_FOLDER_LIST, folders: folders.data };
};

export function fetchFolders() {
  return dispatch => {
    return axios.get(`${URL.GET_ALL_FOLDER}`)
      .then(folders => { dispatch(fetchFoldersSuccess(folders)); })
      .catch(error => { throw (error); });
  };
};

export function folderClicked(folder) {
  console.log(`You are clicked at folder name = ${folder.name}`);
  return {
    type: SELECT_FOLDER,
    payload: folder,
  };
};
