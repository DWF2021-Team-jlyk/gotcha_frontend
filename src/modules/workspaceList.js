import * as api from '../lib/workListAPI';
import createRequest from '../lib/createRequest';

const POST_LIST = 'workspaceList/POST_LIST';
const POST_LIST_SUCCESS = 'workspaceList/POST_LIST_SUCCESS';
const POST_LIST_FAILURE = 'workspaceList/POST_LIST_FAILURE';

const LIST_ADD = 'workspaceList/LIST_ADD';
const LIST_UPDATE = 'workspaceList/LIST_UPDATE';
const LIST_DELETE = "workspaceList/LIST_DELETE";

export const postList = createRequest(POST_LIST, api.postList)

export const listAdd = list =>({type:LIST_ADD, list});

export const listUpdate = list => ({type:LIST_UPDATE,list});
export const listDelete = list_id => ({type:LIST_DELETE, list_id});
//export const addList = createRequest(ADD_LIST,api.addList);


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
      case LIST_ADD:
        return {
          ...state,
          lists:state.lists.concat(action.list)
        }
      case LIST_UPDATE:
        return{
          ...state,
          lists:state.lists.map(
            list => list.list_id === action.list.list_id ?
            {...action.list} : list
          )

        }
      case LIST_DELETE :
        return {
          ...state,
          lists: state.lists.filter(list=>list.list_id !== action.list_id)
        }
 
      default:
        return state;
   }
}

export default workspaceList;