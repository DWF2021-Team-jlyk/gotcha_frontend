import axios from 'axios';
import apiAxios from './apiAxios';

export const postList = ws_id =>
  apiAxios('/main/wsList/list', { ws_id: ws_id });
// axios({
//   url: '/main/wsList/list',
//   method: 'post',
//   headers: {'content-type' : 'application/json'},
//   data: {
//     ws_id:ws_id,
//   }
// });

export const postCard = ws_id =>
  apiAxios('/main/wsList/list/card', { ws_id: ws_id });
// axios({
//     url:'/main/wsList/list/card',
//     method: 'post',
//     headers: {'content-type' : 'application/json'},
//     data: {
//     ws_id:ws_id,
//   }
// });

