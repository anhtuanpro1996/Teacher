import * as URL from '../constants/Url';
import axios from 'axios';
import { CREATE_COURSE_INFOS, SET_COURSE_INFOS, SET_CURRENT_PAGE, SET_ACTIVE_PAGE} from '../constants/ActionTypes';

export const createCourseInfo = ({data}) => {
  return (dispatch) => {
    return axios.post(`${URL.CREATE_COURSES_INFO}`, data)
      .then(response => {
        dispatch(createCourseInfoSuccess(response.data));
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const createCourseInfoSuccess =  (payload) => {
  return {
    type: CREATE_COURSE_INFOS,
    payload,
  };
};

export const SetInfoCourses =  (data) => {
  return {
    type: SET_COURSE_INFOS,
    data: data,
  };
};

export const SetCurrentPage =  (data) => {
  return {
    type: SET_CURRENT_PAGE,
    data: data,
  };
};

export const SetActivePage =  (data) => {
  return {
    type: SET_ACTIVE_PAGE,
    data: data,
  };
};
