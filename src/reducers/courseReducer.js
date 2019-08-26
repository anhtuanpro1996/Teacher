import { CREATE_COURSE_INFOS, SET_COURSE_INFOS, SET_ACTIVE_PAGE} from '../constants/ActionTypes';

const initialState = [{
  data: [],
  page: 0,
  active: true,
  loading: false,
},
{
  data: [],
  page: 1,
  active: false,
  loading: false,
},
{
  data: [],
  page: 2,
  active: false,
  loading: false,
}];

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
  case CREATE_COURSE_INFOS:
    console.log('result', action.payload.page );
    return state.map((todo) => todo.page === action.payload.page ? { ...todo, data: action.payload.data, page: 1, loading: true } : todo);
  case SET_COURSE_INFOS:
    return state.map((todo) => todo.page === action.data.page ? { ...todo, data: action.data.data, page: action.data.page } : todo);
  case SET_ACTIVE_PAGE:
    return state.map((todo) => todo.page === action.data.page ? { ...todo, active: true} : { ...todo, active: false});
  default:
    return state;
  }
}
