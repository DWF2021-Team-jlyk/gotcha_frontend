import {handleAction} from 'redux-actions';
import * as homeAPI from '../lib/workspaceAPI';

const GET_NOTI = 'home/GET_NOTI';
const GET_NOTI_SUCCESS = 'home/GET_NOTI_SUCCESS';
const GET_NOTI_FAILURE = 'home/GET_NOTI_FAILURE';

const POST_NOTI = 'home/POST_NOTI';
const POST_NOTI_SUCCESS = 'home/POST_NOTI_SUCCESS';
const POST_NOTI_FAILURE = 'home/POST_NOTI_FAILURE';

const GET_WORKSPACES = 'home/GET_WORKSPACES';
const GET_WORKSPACES_SUCCESS = 'home/GET_WORKSPACES_SUCCESS';
const GET_WORKSPACES_FAILURE = 'home/GET_WORKSPACES_FAILURE';

const POST_WORKSPACES = 'home/POST_WORKSPACES';
const POST_WORKSPACES_SUCCESS = 'home/POST_WORKSPACES_SUCCESS';
const POST_WORKSPACES_FAILURE = 'home/POST_WORKSPACES_FAILURE';

export const getWorkspaces = userId => async dispatch =>{
  dispatch({type:GET_WORKSPACES});
  
  try{
    const response = await homeAPI.getWorkspaces(userId);
    dispatch({
      type:GET_WORKSPACES_SUCCESS,
      payload: response.data
    });
  }catch (e) {
    dispatch({
      type:GET_WORKSPACES_FAILURE,
      payload: e,
      error:true
    });
    throw e;
  }
}

export const getNotification = userId => async dispatch => {

}

const initialState = {
  loading : {
    GET_NOTI: false,
    POST_NOTI : false,
    GET_WORKSPACES : false,
    POST_WORKSPACES : false,
  },
  workspaces: null,
  notifications : null,
}

const home = handleAction(
  {

  }
)

export default home;