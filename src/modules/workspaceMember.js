import createRequest from '../lib/createRequest';
import * as api from '../lib/workspaceAPI';
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const POST_WS_MEMBER = 'home/POST_WS_MEMBER'
const POST_WS_MEMBER_SUCCESS = 'home/POST_WS_MEMBER_SUCCESS'
// const POST_WS_MEMBER_FAILURE = 'home/POST_WS_MEMBER_FAILURE'


export const postWorkspaceMember =
  createRequest(POST_WS_MEMBER, api.postGetWorkspaceMembers);

const initialState = {
  wsMembers: [],
};

const workspaceMember = handleActions(
  {
    [POST_WS_MEMBER_SUCCESS]: (state, action) =>
      produce(state, draft=>{
        draft.wsMembers = action.payload;
      })
  },
  initialState,
);

export default workspaceMember;
