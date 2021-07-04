import * as api from '../lib/workListAPI';
import { createAction, handleActions } from 'redux-actions';
import { bindActionCreators } from 'redux';
import produce from 'immer';
import createRequest from '../lib/createRequest';
import { GrActions } from 'react-icons/gr';

// const ADD_LIST_LOADING = 'addlist/ADD_LIST_LOADING';
const ADD_LIST_SUCCESS = 'addlist/ADD_LIST_SUCCESS';
const ADD_LIST_FAILURE = 'addlist/ADD_LIST_FAILURE';

//const ADD_LIST = 'addlist/ADD_LIST';

const UPDATE_LIST_SUCCESS = 'addlist/UPDATE_LIST_SUCCESS';
const UPDATE_LIST_FAILURE = 'addlist/UPDATE_LIST_FAILURE';

const DELETE_LIST = 'addlist/DELETE_LIST'
const DELETE_LIST_SUCCESS = 'addlist/DELETE_LIST_SUCCESS';
const DELETE_LIST_FAILURE = 'addlist/DELETE_LIST_FAILURE';

//export const addList = createRequest(ADD_LIST,api.addList);
export const addList =
  ( list_name, ws_id ) =>
  async (dispatch) => {
    // console.log('addList list_name', list_name);
    // console.log('addList ws_id', ws_id);
    // dispatch({type:ADD_LIST,});
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

//   export const updateList = (list_name, ws_id, list_id) =>async (dispatch) =>{
//     try {
//       const response = await api.updateList( list_name, ws_id, list_id );

//       dispatch({
//         type: UPDATE_LIST_SUCCESS,
//         payload: response.data,
//       });
//       console.log('addList response', response);
//     } catch (error) {
//       dispatch({
//         type: UPDATE_LIST_FAILURE,
//         payload: error,
//         error: true,
//       });
//       throw error;
//     }
//   }

  export const deleteList = createRequest(DELETE_LIST,api.deleteList)
const initialState = {
  loading: false,
  error: false,
  data: {
    list_name: '',
    ws_id: '',
    list_id:'',
  },
};

export default function addlist(state = initialState, action) {
  switch (action.type) {
    // case ADD_LIST:
    //   return {
    //     ...state,
    //     loading:true,
    //   }
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
    // case UPDATE_LIST_SUCCESS:
    //   return{
    //     ...state,
    //     loading:false,
    //     data:{
    //       list_name:action.payload.list_name,
    //       ws_id:action.payload.ws_id,
    //       list_id:action.payload.list_id,
    //     }
    //   }
    //   case UPDATE_LIST_FAILURE:
    //     return{
    //       ...state,
    //       loading:false,
    //       error:true,
    //     }
    //   case DELETE_LIST_SUCCESS:
    //     return{
    //       ...state,
    //       loading:false,
    //       data:{
    //         list_id: action.list_id,
    //       }
    //     }
    //   case DELETE_LIST_FAILURE:
    //     return{
    //       ...state,
    //       loading:false,
    //       error:true,
    //     }
    default:
      return state;
  }
}