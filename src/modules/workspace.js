import createRequest from '../lib/createRequest';
import * as api from '../lib/workspaceAPI';
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const ADD_WORKSPACE = 'workspace/ADD_WORKSPACE';
const DELETE_WORKSPACE = 'workspace/DELETE_WORKSPACE';
// const CHANGE_WORKSPACE_NAME = 'workspace/CHANGE_WORKSPACE_NAME';
const CHANGE_WORKSPACE_FAV = 'workspace/CHANGE_WORKSPACE_FAV';

const POST_WORKSPACES = 'workspace/POST_WORKSPACES';
const POST_WORKSPACES_SUCCESS = 'workspace/POST_WORKSPACES_SUCCESS';
const POST_WORKSPACES_FAILURE = 'workspace/POST_WORKSPACES_FAILURE';

export const addWorkspace =
  createAction(ADD_WORKSPACE, workspace => workspace);
export const deleteWorkspace =
  createAction(DELETE_WORKSPACE, ws_id=>ws_id);
export const changeWorkspaceFav =
  createAction(CHANGE_WORKSPACE_FAV, ws_id => ws_id);

export const postWorkspaces = createRequest(POST_WORKSPACES, api.postGetWorkspaces);

const initialState = {
  workspaces: [],
};

const workspace = handleActions(
  {
    [ADD_WORKSPACE]: (state, { payload: workspace }) =>
      produce(state, draft => {
        draft.workspaces.push(workspace);
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
  },
  initialState,
);

export default workspace;
