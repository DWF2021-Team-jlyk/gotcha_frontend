import * as api from '../lib/workListAPI';
import createRequest from '../lib/createRequest';
import { handleActions } from 'redux-actions';
import produce from 'immer';

const POST_LIST = 'workspaceList/POST_LIST';
const POST_LIST_SUCCESS = 'workspaceList/POST_LIST_SUCCESS';
const POST_LIST_FAILURE = 'workspaceList/POST_LIST_FAILURE';

const LIST_ADD = 'workspaceList/LIST_ADD';
const LIST_ADD_SUCCESS = 'workspaceList/LIST_ADD_SUCCESS';
const LIST_ADD_FAILURE = 'workspaceList/LIST_ADD_FAILURE';

const LIST_UPDATE = 'workspaceList/LIST_UPDATE'
const LIST_UPDATE_SUCCESS = 'workspaceList/LIST_UPDATE_SUCCESS';
const LIST_UPDATE_FAILURE = 'workspaceList/LIST_UPDATE_FAILURE';

const LIST_DELETE = 'workspaceList/LIST_DELETE';
const LIST_DELETE_SUCCESS = 'workspaceList/LIST_DELETE_SUCCESS';
const LIST_DELETE_FAILURE = 'workspaceList/LIST_DELETE_FAILURE';

export const postList = createRequest(POST_LIST, api.postList);
export const listAdd = createRequest(LIST_ADD, api.addList);
export const listUpdate = createRequest(LIST_UPDATE, api.updateList);
export const listDelete = createRequest(LIST_DELETE, api.deleteList);


const initialState = {
  loading: {
    POST_LIST: false,
  },
  lists: [],
};

const workspaceList = handleActions(
  {
    [POST_LIST]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_LIST = true;
      }),
    [POST_LIST_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_LIST = false;
        draft.lists = action.payload;
      }),
    [POST_LIST_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_LIST = false;
      }),
    [LIST_ADD]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_LIST = true;
      }),
    [LIST_ADD_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_LIST = false;
        draft.lists.push(action.payload);
      }),
    [LIST_ADD_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_LIST = false;
      }),
    [LIST_UPDATE]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_LIST = true;
      }),
    [LIST_UPDATE_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_LIST = false;
        const list = draft.lists
          .find(list=> list.list_id === action.payload.list_id);
        list.list_id = action.payload.list_id;
        list.list_name = action.payload.list_name;
        list.ws_id = action.payload.ws_id;
      }),
    [LIST_UPDATE_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_LIST = false;
      }),
    [LIST_DELETE]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_LIST = true;
      }),
    [LIST_DELETE_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_LIST = false;
        const index = draft.lists
          .findIndex(list=>list.list_id === action.payload.list_id);
        draft.lists.splice(index,1);
      }),
    [LIST_DELETE_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_LIST = false;
      }),
  },
  initialState,
);

export default workspaceList;