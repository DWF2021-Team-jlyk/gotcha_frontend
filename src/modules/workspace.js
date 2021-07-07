import createRequest from '../lib/createRequest';
import * as api from '../lib/workspaceAPI';
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const ADD_WORKSPACE = 'workspace/ADD_WORKSPACE';
const ADD_WORKSPACE_SUCCESS = 'workspace/ADD_WORKSPACE_SUCCESS';
const DELETE_WORKSPACE = 'workspace/DELETE_WORKSPACE';
// const CHANGE_WORKSPACE_NAME = 'workspace/CHANGE_WORKSPACE_NAME';
const CHANGE_WORKSPACE_FAV = 'workspace/CHANGE_WORKSPACE_FAV';

const POST_WORKSPACES = 'workspace/POST_WORKSPACES';
const POST_WORKSPACES_SUCCESS = 'workspace/POST_WORKSPACES_SUCCESS';
const POST_WORKSPACES_FAILURE = 'workspace/POST_WORKSPACES_FAILURE';

const UPDATE_WORKSPACE = 'workspace/UPDATE_WORKSPACE';
const UPDATE_WORKSPACE_SUCCESS = 'workspace/UPDATE_WORKSPACE_SUCCESS';

export const deleteWorkspace =
  createAction(DELETE_WORKSPACE, ws_id=>ws_id);
export const changeWorkspaceFav =
  createAction(CHANGE_WORKSPACE_FAV, ws_id => ws_id);

export const postWorkspaces = createRequest(POST_WORKSPACES, api.postGetWorkspaces);
export const addWorkspaces = createRequest(ADD_WORKSPACE, api.postAddWorkspace);
export const updateWorkspace = createRequest(UPDATE_WORKSPACE, api.updateWorkspace);

export const updateWorkspace = createRequest(UPDATE_WORKSPACE, api.updateWorkspace);

const initialState = {
  workspaces: [],
};

const workspace = handleActions(
  {
    [ADD_WORKSPACE_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.workspaces.push(action.payload);
    }),
    [CHANGE_WORKSPACE_FAV]: (state, { payload: ws_id }) =>
      produce(state, draft => {
        const workspace = draft.workspaces.find(ws => ws.ws_id === ws_id);
        workspace.is_fav = !workspace.is_fav;
      }),

    [DELETE_WORKSPACE]: (state, { payload: ws_id }) =>
      produce(state, draft => {
        const index = draft.workspaces.findIndex(ws => ws.ws_id === ws_id);
        draft.workspaces.splice(index, 1);
      }),
    [POST_WORKSPACES_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.workspaces = action.payload;
      }),
    [UPDATE_WORKSPACE_SUCCESS]: (state, action) => 
      produce(state, draft => {
        const index = draft.workspaces
          .findIndex(ws=> ws.ws_id === action.payload.ws_id);
        draft.workspaces.splice(index, 1, action.payload);
      }),
  },
  initialState,
);

export default workspace;
