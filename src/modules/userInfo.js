import createRequest from '../lib/createRequest';
import * as api from '../lib/userInfoAPI';
import { handleActions } from 'redux-actions';
import produce from 'immer';

const GET_USER_INFO = 'userInfo/GET_USER_INFO';
const GET_USER_INFO_SUCCESS = 'userInfo/GET_USER_INFO_SUCCESS';

export const getUserInfo = createRequest(GET_USER_INFO, api.getUserInfo);

const initialState = {
    userId:"",
    //userName:"",
};

const userInfo = handleActions(
  {
    [GET_USER_INFO_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.userId = action.payload.user_id;
        //draft.userName = action.payload.user_name;
      }),
  },
  initialState,
);

export default userInfo;