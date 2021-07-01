import * as api from '../lib/workListAPI';
import { createAction, handleActions } from 'redux-actions';
import { bindActionCreators } from 'redux';
import produce from 'immer';
import createRequest from '../lib/createRequest';

// const ADD_LIST_LOADING = 'addlist/ADD_LIST_LOADING';
const ADD_LIST_SUCCESS = 'addlist/ADD_LIST_SUCCESS';
const ADD_LIST_FAILURE = 'addlist/ADD_LIST_FAILURE';

const ADD_LIST = 'addlist/ADD_LIST';

//export const addList = createRequest(ADD_LIST,api.addList);
export const addList =
  ( list_name, ws_id ) =>
  async (dispatch) => {
    console.log('addList list_name', list_name);
    console.log('addList ws_id', ws_id);
    dispatch({type:ADD_LIST,});
    try {
      const response = await api.addList( list_name, ws_id );

      dispatch({
        type: ADD_LIST_SUCCESS,
        payload: response.data,
      });
      console.log('addList response', response);
    } catch (error) {
      dispatch({
        type: ADD_LIST_FAILURE,
        payload: error,
        error: true,
      });
      throw error;
    }
  };
const initialState = {
  loading: false,
  error: false,
  data: {
    list_name: '',
    ws_id: '',
  },
};

export default function addlist(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        loading:true,
      }
    case ADD_LIST_SUCCESS:
      return {
        ...state,
        loading:false, 
        data:{
          list_name:action.payload.list_name,
          ws_id : action.payload.ws_id,
        }
      }
    case ADD_LIST_FAILURE:
      return {
        ...state,
        loading:false, 
        error:true,
      }
    default:
      return state;
  }
}