import * as workspaceAPI from '../lib/workspaceAPI';

const POST_LIST = 'workspace/POST_LIST';
const POST_LIST_SUCCESS = 'workspace/POST_LIST_SUCCESS';
const POST_LIST_FAILURE = 'workspace/POST_LIST_FAILURE';

export const postList = ws_id => async dispatch => {
  dispatch({ type: POST_LIST });
  try {
    const response = await workspaceAPI.postList(ws_id);
    console.log("response",response);
    dispatch({
      type: POST_LIST_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: POST_LIST_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

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