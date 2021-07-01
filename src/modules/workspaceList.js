import * as api from '../lib/workListAPI';
import createRequest from '../lib/createRequest';

const POST_LIST = 'workspace/POST_LIST';
const POST_LIST_SUCCESS = 'workspace/POST_LIST_SUCCESS';
const POST_LIST_FAILURE = 'workspace/POST_LIST_FAILURE';

const ADD_LIST = 'workspacelist/ADD_LIST';

export const postList = createRequest(POST_LIST, api.postList)

export const addList = createRequest(ADD_LIST,api.addList);


const initialState = {
  loading: {
    POST_LIST: false,
  },
  lists: [],
};



function workspaceList(state = initialState, action) {
  switch (action.type) {
    case POST_LIST:
      return {
        ...state,
        loading: {
          ...state.loading,
          POST_LIST: true,
        },
      };
    case POST_LIST_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          POST_LIST: false,
        },
        lists: action.payload,
      };
    case POST_LIST_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          POST_LIST: false,
        },
      };
 
      default:
        return state;
   }
}

export default workspaceList;