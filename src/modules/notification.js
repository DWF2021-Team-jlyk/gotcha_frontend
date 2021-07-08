import createRequest from '../lib/createRequest';
import * as api from '../lib/notiAPI';
import { handleActions } from 'redux-actions';
import produce from 'immer';

const ADD_NOTI = 'notification/ADD_NOTI';
const DELETE_NOTI = 'notification/DELETE_NOTI';
const CHANGE_NOTI_READ = 'notification/CHANGE_NOTI_READ';

const POST_NOTI = 'notification/POST_NOTI';
const POST_NOTI_SUCCESS = 'notification/POST_NOTI_SUCCESS';


export const addNoti = noti => ({ type: ADD_NOTI, noti });
export const deleteNoti = noti_id => ({ type: DELETE_NOTI, noti_id });
export const changeNotiRead = noti_id => ({ type: CHANGE_NOTI_READ, noti_id });

export const postNoti = createRequest(POST_NOTI, api.postNoti);
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
      }),

  },
  initialState,
);

export default notification;