const contextFileInitialState = {
  pending: true,
  response: {},
};
const contextFileReducer = (state = contextFileInitialState, action) => {
  switch (action.type) {
  case 'CHANGE_FILE_NAME_SUCCESS':
    return {
      ...state,
      pending: false,
      response: action.payload,
    }
  default:
    return state
  }
}

export default contextFileReducer;