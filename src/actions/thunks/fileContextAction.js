import axios from 'axios';
import * as URL from  '../../constants/Url';

export function changeNameFile(fileID, data) {
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
      })
      .catch(error => {
        throw (error);
      });
  };
};

export function removeFile(fileID) {
  const url = URL.DELETE_FILE + fileID;
  console.log('removeFile', url);
  return (dispatch) => {
    return axios.delete(url)
      .then(res => {
        dispatch({ type: 'DELETE_FILE_SUCCESS', payload: res});
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
