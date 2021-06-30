import * as api from '../lib/workListAPI';
import { createAction, handleActions } from 'redux-actions';
import { bindActionCreators } from 'redux';
import produce from 'immer';
import createRequest from '../lib/createRequest';

const ADD_LIST = 'addlist/ADD_LIST';
const ADD_LIST_SUCCESS = 'addlist/ADD_LIST_SUCCESS';
const ADD_LIST_FAILURE = 'addlist/ADD_LIST_FAILURE';

const addListLoading = createAction(ADD_LIST);
const addListSuccess = createAction(ADD_LIST_SUCCESS);
const addListFailure = createAction(ADD_LIST_FAILURE);




export const addList =
  ({ list_name, ws_id }) => 
  async (dispatch) => {
    console.log("addList list_name",list_name);
    console.log("addList ws_id",ws_id);
    dispatch(addListLoading());
    try {
      const response = await api.addList({ list_name, ws_id });
      dispatch(addListSuccess(response));
      console.log('addList response', response);
    } catch (error) {
      dispatch(addListFailure);
      throw error;
    }
  };
const initialState = {
  loading: false,
  error: false,
  data:{
  list_name: '',
  ws_id: '',
}
};


const addlist = handleActions({
  [ADD_LIST] : (state,action) =>{
    return {
      ...state,
      loading:true,
      error:false
    };
  },
  [ADD_LIST_SUCCESS]: (state, action) =>{
    const {list_name,ws_id} = action.payload.data;
    return{
      ...state,
      loading:false,
      error:false,
      data:{
        list_name,
        ws_id
      }
    };
  },
  [ADD_LIST_FAILURE]:(state,action)=>{
    return{
      ...state,
      loading:false,
      error:true

    }
  }
}, initialState);
export default addlist;
