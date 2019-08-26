// import { fetchRootFolderPending, fetchRootFolderSuccess, fetchRootFolderError } from '../RootFolderAction';
// import * as URL from '../../constants/Url';

// export function fetchRootFolders(idFolder) {
//   return dispatch => {
//     dispatch(fetchRootFolderPending());
//     fetch(`${URL.GET_ALL_FOLDER}`)
//       .then(res => res.json())
//       .then(res => {
//         dispatch(fetchRootFolderSuccess(res));
//       })
//       .catch(error => {
//         dispatch(fetchRootFolderError(error));
//       });
//   };
// };
