import { fetchRootFolderPending, fetchRootFolderSuccess, fetchRootFolderError } from '../RootFolderAction';
import * as URL from '../../constants/Url';
// export function fetchRootFolders() {
//   return dispatch => {
//     return axios.get(`${URL.GET_ALL_FOLDER}`)
//       .then(folders => { dispatch(fetchFoldersSuccess(folders)); })
//       .catch(error => { throw (error); });
//   };
// };

export function fetchRootFolders() {
  return dispatch => {
    dispatch(fetchRootFolderPending());
    fetch(`${URL.GET_ALL_FOLDER}`)
      .then(res => res.json())
      .then(res => {
        dispatch(fetchRootFolderSuccess(res));
      })
      .catch(error => {
        dispatch(fetchRootFolderError(error));
      });
  };
};
