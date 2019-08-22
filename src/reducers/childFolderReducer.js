const childFolderInitialState = {
  pending: false,
  datas: [],
};
const childFolderReducer = (state = childFolderInitialState, action) => {
  switch (action.type) {
  case 'FETCH_DATA_CHILD_FOLDER_SUCCESS':
    return {
      ...state,
      pending: true,
      datas: action.payload,
    };
  default:
    return state;
  }
};

export default childFolderReducer;
