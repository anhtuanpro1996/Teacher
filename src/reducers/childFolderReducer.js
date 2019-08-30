const childFolderInitialState = {
  pending: false,
  datas: {childFolders:[], files:[]},
  breadcumb: [],
};
const childFolderReducer = (state = childFolderInitialState, action) => {
  switch (action.type) {
  case 'FETCH_DATA_CHILD_FOLDER_SUCCESS':
    return {
      ...state,
      pending: true,
      datas: action.payload,
      breadcumb: [...state.breadcumb, {id: action.payload.id, title: action.payload.name}],
    };
  case 'FETCH_DATA_BREADCUMB_SUCCESS':
    return {
      ...state,
      datas: action.payload.res,
      breadcumb: action.payload.breadcumb,
    };
  case 'ACTION_CONTEXT_MENU':
    return {
      ...state,
      pending: true,
      datas: action.payload,
    };
  case 'REMOVE_FILE_CHILD_FOLDER':
    const files = state.datas.files.filter((file) => file.id !== action.id);
   
    const data = state.datas;
    data.files = files;
    return { ...state, datas: data}
  default:
    return state;
  }
};

export default childFolderReducer;
