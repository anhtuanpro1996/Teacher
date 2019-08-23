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

export function clickedBreadcumb(data, idFolder) {
  const url = 'http://localhost:4000/folders/' + idFolder;
  const payload = {};
  payload.breadcumb = data;
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        payload.res = res;
        dispatch({ type: 'FETCH_DATA_BREADCUMB_SUCCESS', payload: payload});
      })
      .catch(error => {
        dispatch({ type: 'FETCH_DATA_BREADCUMB_ERROR', payload: error});
      });
  };
};
