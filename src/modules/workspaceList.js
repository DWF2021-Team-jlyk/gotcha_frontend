import * as api from '../lib/workListAPI';
import createRequest from '../lib/createRequest';
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const POST_LIST = 'workspaceList/POST_LIST';
const POST_LIST_SUCCESS = 'workspaceList/POST_LIST_SUCCESS';

const LIST_ADD = 'workspaceList/LIST_ADD';
const LIST_ADD_SUCCESS = 'workspaceList/LIST_ADD_SUCCESS';

const LIST_UPDATE = 'workspaceList/LIST_UPDATE';
const LIST_UPDATE_SUCCESS = 'workspaceList/LIST_UPDATE_SUCCESS';

const LIST_DELETE = 'workspaceList/LIST_DELETE';
const LIST_DELETE_SUCCESS = 'workspaceList/LIST_DELETE_SUCCESS';

const LIST_UNMOUNT = 'workspaceList/LIST_UNMOUNT';

export const postList = createRequest(POST_LIST, api.postList);
export const listAdd = createRequest(LIST_ADD, api.addList);
export const listUpdate = createRequest(LIST_UPDATE, api.updateList);
export const listUnmount = createAction(LIST_UNMOUNT);
export const listDelete = createRequest(LIST_DELETE, api.deleteList);
export const deleteList = (list) => async dispatch => {
  dispatch({type:LIST_DELETE});
  try{
    const response = await api.deleteList(list);
    dispatch({
      type: 'workspace/LIST_CARD_DELETE',
      payload:response.data
    })
    dispatch({
      type: LIST_DELETE_SUCCESS,
      payload:response.data
    })
  }catch (e) {
    dispatch({
      type: 'workspace/LIST_DELETE_FAILURE',
      payload: e,
      error:true
    });
    throw e;
  }
}


const initialState = {
  lists: [],
};

const workspaceList = handleActions(
  {
    [POST_LIST_SUCCESS]: (state, action) =>
      produce(state, draft => {
        action.payload.sort((list1, list2) => {
          if (list1.position > list2.position)
            return 1;
          else
            return -1;
        });
        draft.lists = action.payload;
      }),
    [LIST_ADD_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.lists.push(action.payload);
        draft.lists.sort((list1, list2) => {
          if (list1.position > list2.position)
            return 1;
          else
            return -1;
        });
      }),
    [LIST_UPDATE_SUCCESS]: (state, action) =>
      produce(state, draft => {
        const list = draft.lists
          .find(list => list.list_id === action.payload.list_id);

        list.list_name = action.payload.list_name;
        list.position = action.payload.position;

        draft.lists.sort((list1, list2) => {
          if (list1.position > list2.position)
            return 1;
          else
            return -1;
        });
      }),
    [LIST_DELETE_SUCCESS]: (state, action) =>
      produce(state, draft => {
        const index = draft.lists
          .findIndex(list => list.list_id === action.payload.list_id);
        draft.lists.splice(index, 1);
      }),
    [LIST_UNMOUNT]: (state, action) =>
      produce(state, draft => {
        draft.lists = [];
      }),
  },
  initialState,
);

export default workspaceList;