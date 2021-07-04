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

const LIST_UPDATE = 'workspaceList/LIST_UPDATE';
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
  lists: [],
};

const workspaceList = handleActions(
  {
    [POST_LIST_SUCCESS]: (state, action) =>
      produce(state, draft => {
        action.payload.sort((list1, list2)=>{
          if(list1.position > list2.position)
            return 1;
          else
            return -1;
        })
        draft.lists = action.payload;
      }),
    [LIST_ADD_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.lists.push(action.payload);
      }),
    [LIST_UPDATE_SUCCESS]: (state, action) =>
      produce(state, draft => {
        const list = draft.lists
          .find(list => list.list_id === action.payload.list_id);
        list.list_id = action.payload.list_id;
        list.position = action.payload.position;
        list.list_name = action.payload.list_name;
        list.ws_id = action.payload.ws_id;

        draft.sort((list1, list2)=>{
          if(list1.position > list2.position)
            return 1;
          else
            return -1;
        })
      }),
    [LIST_DELETE_SUCCESS]: (state, action) =>
      produce(state, draft => {
        const index = draft.lists
          .findIndex(list => list.list_id === action.payload.list_id);
        draft.lists.splice(index, 1);
      }),
  },
  initialState,
);

export default workspaceList;