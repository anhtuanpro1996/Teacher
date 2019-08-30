import {CLOSE_MODAL_CONTEXT_MENU} from '../constants/ActionTypes';

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
  case CLOSE_MODAL_CONTEXT_MENU:
    return {...state, loading: false};
  default:
    return state
  }
};

export default listFolderForContextReducer;