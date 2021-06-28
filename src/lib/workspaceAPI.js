import axios from 'axios';

export const postList = ws_id =>
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

