import createRequest from '../lib/createRequest';
import * as api from '../lib/workspaceAPI'
import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';

const ADD_WORKSPACE = 'workspace/ADD_WORKSPACE';
const DELETE_WORKSPACE = 'workspace/DELETE_WORKSPACE';
// const CHANGE_WORKSPACE_NAME = 'workspace/CHANGE_WORKSPACE_NAME';
const CHANGE_WORKSPACE_FAV = 'workspace/CHANGE_WORKSPACE_FAV';

const POST_WORKSPACES = 'workspace/POST_WORKSPACES';
const POST_WORKSPACES_SUCCESS = 'workspace/POST_WORKSPACES_SUCCESS';
const POST_WORKSPACES_FAILURE = 'workspace/POST_WORKSPACES_FAILURE';

export const addWorkspace = createAction(ADD_WORKSPACE, workspace=>workspace);
// export const addWorkspace = workspace => ({ type: ADD_WORKSPACE, workspace });
export const deleteWorkspace = ws_id => ({ type: DELETE_WORKSPACE, ws_id });
// export const changeWorkspaceName = () => ({type:CHANGE_WORKSPACE_NAME, ws_id});
export const changeWorkspaceFav = createAction(CHANGE_WORKSPACE_FAV, ws_id=>ws_id);
// export const changeWorkspaceFav = ws_id => ({ type: CHANGE_WORKSPACE_FAV, ws_id });

export const postWorkspaces = createRequest(POST_WORKSPACES, api.postGetWorkspaces);

const initialState = {
  loading: {
    POST_WORKSPACES: false,
  },
  workspaces: [],
};

// const workspaces = handleActions(
//   {
//     [ADD_WORKSPACE]:(state, {payload:workspace}) =>
//       produce(state, draft=>{
//         draft.workspaces.push(workspace);
//       }),
//     [CHANGE_WORKSPACE_FAV]:(state, {payload:workspace})=>{
//       produce(state, draft=>{
//       })
//     }
//   }
// )

function workspaces(state = initialState, action) {
  switch (action.type) {

    case ADD_WORKSPACE:
      return {
        ...state,
        workspaces: [...state.workspaces, action.workspace],
      };

    case CHANGE_WORKSPACE_FAV:
      return {
        ...state,
        workspaces: state.workspaces.map(workspace =>
          workspace.ws_id === action.payload ?
            {...workspace, is_fav:!workspace.is_fav} : workspace,
        ),
      };

    case DELETE_WORKSPACE:
      return {
        ...state,
        workspaces: state.workspaces.filter(workspace=>
          workspace.ws_id !== action.ws_id
        )
      }

    case POST_WORKSPACES:
      return {
        ...state,
        loading : {
          ...state.loading,
          POST_WORKSPACES: true,
        },
      }
    case POST_WORKSPACES_SUCCESS:
      return {
        ...state,
        loading : {
          ...state.loading,
          POST_WORKSPACES: false,
        },
        workspaces: action.payload,
      }
    case POST_WORKSPACES_FAILURE:
      return {
        ...state,
        loading:{
          ...state.loading,
          POST_WORKSPACES: false,
        },
      }
    default:
      return state;

  }
}

export default workspaces;
