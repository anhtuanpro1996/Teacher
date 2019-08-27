// export const createCourseInfo = ({data}) => {
//   return (dispatch) => {
//     return axios.post(`${URL.CREATE_COURSES_INFO}`, data)
//       .then(response => {
//         dispatch(createCourseInfoSuccess(response.data));
//       })
//       .catch(error => {
//         throw (error);
//       });
//   };
// };
import axios from 'axios';
// export function changeNameFile(fileID, data) {
//   const url = 'http://157.230.255.33:8890/api/lms/files/' + fileID;
//   console.log('changeNameFile', data);
//   const dataSend = {name: data};
//   return dispatch => {
//     fetch(url, {
//       method: 'PUT',
//       body: JSON.stringify(dataSend),
//     })
//       .then(res => res.json())
//       .then(res => {
//         dispatch({ type: 'CHANGE_FILE_NAME_SUCCESS', payload: res});
//         // console.log('rest', res);
//       })
//       .catch(error => {
//         dispatch({ type: 'CHANGE_FILE_NAME_ERROR', payload: error});
//       });
//   };
// };

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
