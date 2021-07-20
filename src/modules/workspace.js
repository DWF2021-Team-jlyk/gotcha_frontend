import createRequest from '../lib/createRequest';
import * as api from '../lib/workspaceAPI';
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { startLoading } from './loading';
import axios from 'axios';

const ADD_WORKSPACE = 'workspace/ADD_WORKSPACE';
const ADD_WORKSPACE_SUCCESS = 'workspace/ADD_WORKSPACE_SUCCESS';
const DELETE_WORKSPACE = 'workspace/DELETE_WORKSPACE';
const DELETE_WORKSPACE_SUCCESS = 'workspace/DELETE_WORKSPACE_SUCCESS'
// const CHANGE_WORKSPACE_NAME = 'workspace/CHANGE_WORKSPACE_NAME';
const CHANGE_WORKSPACE_FAV = 'workspace/CHANGE_WORKSPACE_FAV';

const POST_WORKSPACES = 'workspace/POST_WORKSPACES';
const POST_WORKSPACES_SUCCESS = 'workspace/POST_WORKSPACES_SUCCESS';
const POST_WORKSPACES_FAILURE = 'workspace/POST_WORKSPACES_FAILURE';

const UPDATE_WORKSPACE = 'workspace/UPDATE_WORKSPACE';
const UPDATE_WORKSPACE_SUCCESS = 'workspace/UPDATE_WORKSPACE_SUCCESS';

const UPDATE_WORKSPACE_NAME = 'workspace/UPDATE_WORKSPACE_NAME';
const UPDATE_WORKSPACE_NAME_SUCCESS = 'workspace/UPDATE_WORKSPACE_NAME_SUCCESS';

const GET_WORKSPACE_FILE_NAME = 'workspace/GET_WORKSPACE_FILE_NAME';
const GET_WORKSPACE_FILE_NAME_SUCCESS = 'workspace/GET_WORKSPACE_FILE_NAME_SUCCESS';

const INVITE_MEMBER = 'workspace/POST_INVITE_MEMBER';
const INVITE_MEMBER_SUCCESS = 'workspace/POST_INVITE_MEMBER_SUCCESS';

const INIT_WORKSPACE = 'workspace/INIT_WORKSPACE';



export const deleteWorkspace = (ws_id, user_id) => async dispatch => {
  dispatch(startLoading(DELETE_WORKSPACE));
  try{
    const response =await axios({
      url:"/home/deleteMember",
      method:'post',
      headers:{
        "Authorization":sessionStorage.getItem("accessToken"),
      },
      data :{
        ws_id:ws_id,
        user_id:user_id,
      }
    });
    if(response !== null){
      dispatch({type:DELETE_WORKSPACE_SUCCESS, payload:ws_id});
    }
    else{
      throw 'response undefined error';
    }
  }
  catch (e){
    dispatch(startLoading(DELETE_WORKSPACE));
    throw e;
  };
};

export const postWorkspaces = createRequest(POST_WORKSPACES, api.postGetWorkspaces);
export const addWorkspaces = createRequest(ADD_WORKSPACE, api.postAddWorkspace);
export const updateWorkspace = createRequest(UPDATE_WORKSPACE, api.updateWorkspace);
export const updateWorkspaceName = createRequest(UPDATE_WORKSPACE_NAME, api.updateWorkspaceName);
export const initWorkspace = createAction(INIT_WORKSPACE);
export const getFileName = createAction(GET_WORKSPACE_FILE_NAME, api.getFileName);
export const postInviteMember = createAction(INVITE_MEMBER, api.postInviteMember);

const initialState = {
  workspaces: [],
};

const workspace = handleActions(
  {
    [ADD_WORKSPACE_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.workspaces.push(action.payload);
        draft.workspaces.sort((ws1, ws2)=>{
          if(ws1.ws_id < ws2.ws_id)
            return 1;
          else return -1;
        })
      }),

    [CHANGE_WORKSPACE_FAV]: (state, { payload: ws_id }) =>
      produce(state, draft => {
        const workspace = draft.workspaces.find(ws => ws.ws_id === ws_id);
        workspace.is_fav = !workspace.is_fav;
      }),

    [DELETE_WORKSPACE_SUCCESS]: (state, { payload: ws_id }) =>
      produce(state, draft => {
        const index = draft.workspaces.findIndex(ws => ws.ws_id === ws_id);
        draft.workspaces.splice(index, 1);
      }),

    [POST_WORKSPACES_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.workspaces = action.payload;
        draft.workspaces.sort((ws1, ws2)=>{
          if(ws1.ws_id < ws2.ws_id)
            return 1;
          else return -1;
        })
      }),

    [UPDATE_WORKSPACE_SUCCESS]: (state, action) =>
      produce(state, draft => {
        const index = draft.workspaces
          .findIndex(ws => ws.ws_id === action.payload.ws_id);
        draft.workspaces.splice(index, 1, action.payload);
      }),

    [UPDATE_WORKSPACE_NAME_SUCCESS]: (state, action) =>
      produce(state, draft => {
        const index = draft.workspaces
        .findIndex(ws => ws.ws_id === action.payload.ws_id);
        draft.workspaces.splice(index, 1, action.payload)
      }),

    [GET_WORKSPACE_FILE_NAME_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.workspaces.push(action.payload);
      }),

    [INVITE_MEMBER_SUCCESS]: (state, action) =>
        produce(state, draft => {

      }),
    [INIT_WORKSPACE]:(state, action)=>
        produce(state, draft=>{
          draft.workspaces = [];
        })
  },

  initialState,
);

export default workspace;
