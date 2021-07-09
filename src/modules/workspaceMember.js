import createRequest from '../lib/createRequest';
import * as api from '../lib/workspaceAPI';
import { createAction, handleActions } from 'redux-actions';

const POST_WS_MEMBER = 'home/POST_WS_MEMBER'
const POST_WS_MEMBER_SUCCESS = 'home/POST_WS_MEMBER_SUCCESS'
const POST_WS_MEMBER_FAILURE = 'home/POST_WS_MEMBER_FAILURE'


export const postWorkspaceMember = createRequest(POST_WS_MEMBER, api.postGetWorkspaceMembers);

const initialState = {
  loading: {
    POST_WS_MEMBER: false,
  },
  wsMembers: [],
};

const workspaceMember = handleActions(
  {
    [POST_WS_MEMBER]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        POST_WS_MEMBER: true,
      },
    }),
    [POST_WS_MEMBER_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        POST_WS_MEMBER: false,
      },
    
      wsMembers: action.payload,

    }),
    [POST_WS_MEMBER_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        POST_WS_MEMBER: false,
      },
    }),
  },
  initialState,
);

export default workspaceMember;
