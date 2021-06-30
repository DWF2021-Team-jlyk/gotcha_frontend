import axios from 'axios';
import apiAxios from './apiAxios';

export const postList = ws_id =>
//console.log(ws_id);
  axios({
    url: '/main/wsList/list',
    method: 'post',
    headers: {'content-type' : 'application/json'},
    data: {
      ws_id:ws_id,
    } 
  });
  

export const postCard = ws_id =>
  axios({
      url:'/main/wsList/list/card',
      method: 'post',
      headers: {'content-type' : 'application/json'},
      data: {
      ws_id:ws_id,
    }
  });

export const postGetWorkspaces =
  user_id => apiAxios('/home/wsList', {user_id:user_id});