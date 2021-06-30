import * as api from '../lib/workListAPI';
import { createAction, handleActions } from 'redux-actions';
import { bindActionCreators } from 'redux';
import produce from 'immer';
import createRequest from '../lib/createRequest';

const ADD_LIST = 'addlist/ADD_LIST';
const ADD_LIST_SUCCESS = 'addlist/ADD_LIST_SUCCESS';
const ADD_LIST_FAILURE = 'addlist/ADD_LIST_FAILURE';

export const addList =
  ({ list_name, ws_id }) =>
  async (dispatch) => {
    dispatch({ type: ADD_LIST });
    try {
      const response = await api.addList({ list_name, ws_id });
      console.log('addList response', response);
      dispatch({
        type: ADD_LIST_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ADD_LIST_FAILURE,
        payload: e,
        error: true,
      });
      throw e;
    }
  };

const initialState = {
  list_name: '',
  ws_id: '',
};

function addlist(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        loading: {
          ...state.loading,
          ADD_LIST: true,
        },
      };
    case ADD_LIST_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          ADD_LIST: false,
        },
        list_name: action.payload.list_name,
        ws_id: action.payload.ws_id,
      };
    case ADD_LIST_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          ADD_LIST: false,
        },
      };
    default:
      return state;
  }
}
export default addlist;
