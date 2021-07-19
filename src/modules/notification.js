import createRequest from '../lib/createRequest';
import * as api from '../lib/notiAPI';
import { handleActions } from 'redux-actions';
import produce from 'immer';

const ADD_NOTI = 'notification/ADD_NOTI';
const ADD_NOTI_SUCCESS = 'notification/ADD_NOTI_SUCCESS';

const POST_NOTI = 'notification/POST_NOTI';
const POST_NOTI_SUCCESS = 'notification/POST_NOTI_SUCCESS';

const DELETE_NOTI = 'notification/DELETE_NOTI';
const DELETE_NOTI_SUCCESS = 'notification/DELETE_NOTI_SUCCESS';

const CHANGE_NOTI_CHECK = 'notification/CHANGE_NOTI_CHECK';
const CHANGE_NOTI_CHECK_SUCCESS = 'notification/CHANGE_NOTI_CHECK_SUCCESS';

export const addNoti = noti => ({ type: ADD_NOTI, noti });

export const postNoti = createRequest(POST_NOTI, api.postNoti);
export const deleteNoti = createRequest(DELETE_NOTI, api.deleteNoti);
export const changeNotiCheck = createRequest(CHANGE_NOTI_CHECK, api.changeNotiCheck);
//
// const initialState = [
//
//   ...AppInitData.notifications
// ]

const initialState = {
  noti: [],
};

const notification = handleActions(
  {
    [POST_NOTI_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.noti = action.payload;
        draft.noti.sort((noti1, noti2)=>{
          if(noti1.NOTI_ID < noti2.NOTI_ID){
            return 1;
          }
          else return -1;
        })
      }),
    [ADD_NOTI_SUCCESS] : (state, action) =>
      produce(state, draft => {
        draft.noti.push(action.payload);
      }),
    [DELETE_NOTI_SUCCESS]:(state, action)=>
      produce(state, draft=>{
        const index = draft.noti.findIndex(value=>
          value.NOTI_ID === action.payload.noti_id);
        draft.noti.splice(index, 1);
      }),
    [CHANGE_NOTI_CHECK_SUCCESS]:(state, action)=>
      produce(state, draft=>{
        console.log("notiRedux",state);
        console.log(action.payload);
        const noti = draft.noti.find(value=>
          value.NOTI_ID === parseInt(action.payload.NOTI_ID));
        if(noti.NOTI_CHECKED === "0")
          noti.NOTI_CHECKED = "1";
        else noti.NOTI_CHECKED = "0";
      })
  },
  initialState,
);

export default notification;