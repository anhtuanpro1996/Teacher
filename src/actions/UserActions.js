import * as URL from '../constants/Url';
import axios from 'axios';

export const createPost = ({ name, username }) => {
  return (dispatch) => {
    return axios.post(`${URL.GET_ALL_USER}`, {name, username})
      .then(response => {
        dispatch(createPostSuccess(response.data));
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const createPostSuccess =  (data) => {
  return {
    type: 'ADD_POST',
    payload: {
      name: data.name,
      username: data.username,
    },
  };
};


export function loadAuthorsSuccess(users) {
  return { type: 'LOAD_USER_SUCCESS', users };
}

export function loadAuthors() {
  return dispatch => {
    return axios.get(`${URL.GET_ALL_USER}`)
      .then(authors => { dispatch(loadAuthorsSuccess(authors.data)); })
      .catch(error => { throw (error); });
  };
}
