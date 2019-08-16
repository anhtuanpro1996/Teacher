const initialState = {
  users: [
  ],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
  case 'LOAD_USER_SUCCESS':
    return action.users;
  default:
    return state;
  }
}
