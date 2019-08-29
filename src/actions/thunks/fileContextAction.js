import axios from 'axios';
import * as URL from  '../../constants/Url';
import {clickedBreadcumb} from './fetchChildFolders';

export function changeNameFile(fileID, data, folderID, currentBreadcumb) {
  const url = 'http://157.230.255.33:8890/api/lms/files/' + fileID;
  const dataSend = {name: data};
  return (dispatch) => {
    return axios.put(url, dataSend, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        dispatch({ type: 'CHANGE_FILE_NAME_SUCCESS', payload: res});
        dispatch(clickedBreadcumb(currentBreadcumb, folderID));
      })
      .catch(error => {
        throw (error);
      });
  };
};

export function removeFile(fileID, folderID, currentBreadcumb) {
  const url = URL.DELETE_FILE + fileID;
  return (dispatch) => {
    return axios.delete(url)
      .then(res => {
        dispatch({ type: 'DELETE_FILE_SUCCESS', payload: res});
        dispatch(clickedBreadcumb(currentBreadcumb, folderID));
      })
      .catch(error => {
        throw (error);
      });
  };
};

export function downloadFile(fileID) {
  const url = URL.DOWNLOAD_FILE + fileID + '/download';
  return (dispatch) => {
    return axios.get(url)
      .then(res => {
        dispatch({ type: 'DOWNLOAD_FILE_SUCCESS', payload: res});
      })
      .catch(error => {
        throw (error);
      });
  };
};

export function copyFile(data, folderID, currentBreadcumb) {
  const url = URL.COPY_FILE;
  return (dispatch) => {
    return axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        dispatch({ type: 'COPY_FILE_SUCCESS', payload: res});
        dispatch(clickedBreadcumb(currentBreadcumb, folderID));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function getListFolderForContext(idFolder, breadCumbs) {
  const url = URL.GET_CHILD_FOLDER + idFolder;
  const payload = {};
  payload.breadCumbs = breadCumbs;
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        payload.res = res;
        dispatch({ type: 'FETCH_FOLDER_FOR_CONTEXT_SUCCESS', payload: payload});
      })
      .catch(error => {
        throw (error);
      });
  };
};

export function moveFileToFolder(data) {
  const url = URL.MOVE_FILE;
  return (dispatch) => {
    return axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        dispatch({ type: 'MOVE_FILE_SUCCESS', payload: res});
      })
      .catch(error => {
        throw (error);
      });
  };
};
