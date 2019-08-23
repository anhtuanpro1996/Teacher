export function getChildFolderData(idFolder) {
  const url = 'http://localhost:4000/folders/' + idFolder;
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        dispatch({ type: 'FETCH_DATA_CHILD_FOLDER_SUCCESS', payload: res});
        // console.log('rest', res);
      })
      .catch(error => {
        dispatch({ type: 'FETCH_DATA_CHILD_FOLDER_ERROR', payload: error});
      });
  };
};
