const listFolderForContextInitialState = {
  listFolder: [],
  breadCubms: [],
  loading: false,
};
const listFolderForContextReducer = (state = listFolderForContextInitialState, action) => {
  switch (action.type) {
  case 'FETCH_FOLDER_FOR_CONTEXT_SUCCESS':
    return {
      ...state,
      listFolder: action.payload.res,
      breadCubms: action.payload.breadCumbs,
      loading: true,
    }
  default:
    return state
  }
};

export default listFolderForContextReducer;