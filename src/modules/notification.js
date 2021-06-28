import * as api from '../lib/homeAPI';
import AppInitData from '../DummyData/AppInitData';
import createRequest from '../lib/createRequest';

const ADD_NOTI = 'notification/ADD_NOTI';
const DELETE_NOTI = 'notification/DELETE_NOTI';
const CHANGE_NOTI_READ = 'notification/CHANGE_NOTI_READ';

const POST_NOTI = 'notification/POST_NOTI';
const POST_NOTI_SUCCESS = 'workspace/POST_NOTI_SUCCESS';
const POST_NOTI_FAILURE = 'workspace/POST_NOTI_FAILURE';


export const addNoti = noti => ({ type: ADD_NOTI, noti });
export const deleteNoti = noti_id => ({ type: DELETE_NOTI, noti_id });
export const changeNotiRead = noti_id => ({ type: CHANGE_NOTI_READ, noti_id });

export const postNoti =
  user_id => createRequest(POST_NOTI, api.postGetNoti);
//
// const initialState = [
//
//   ...AppInitData.notifications
// ]

const initialState = {
  loading : {
    POST_NOTI: false,
  },
  noti:[],
}

function notification(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTI :
      return {
        ...state,
        noti:[
          ...state.noti,
          action.noti,
        ]
      };
    case DELETE_NOTI:
      return {
        ...state,
        noti: state.noti.filter(noti=>noti.noti_id !== action.noti_id)
      };
    case CHANGE_NOTI_READ:
      return {
        ...state,
        noti:state.noti.map(
        noti=>noti.noti_id === action.noti_id ?
          {...noti, noti_read : !noti.noti_read} : noti
      )};
    case POST_NOTI:
      return {
        ...state,
        loading : {
          ...state.loading,
          POST_NOTI: true,
        },
      }
    case POST_NOTI_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          POST_NOTI: false,
        },
        noti:action.payload,
      }
    case POST_NOTI_FAILURE:
      return {
        ...state,
        loading:{
          ...state.loading,
          POST_NOTI: false,
        },
      }
    default: return state;
  }
}

export default notification;