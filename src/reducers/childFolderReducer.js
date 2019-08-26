const childFolderInitialState = {
  pending: false,
  datas: [],
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
  default:
    return state;
  }
};

export default childFolderReducer;
