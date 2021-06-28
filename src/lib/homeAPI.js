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