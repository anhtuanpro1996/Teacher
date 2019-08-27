import axios from 'axios';
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
