import axios from 'axios';
import apiAxios from './apiAxios';

export const postList = (ws_id) =>
  apiAxios('/main/wsList/list', { ws_id: ws_id });
// axios({
//   url: '/main/wsList/list',
//   method: 'post',
//   headers: {'content-type' : 'application/json'},
//   data: {
//     ws_id:ws_id,
//   }
// });

export const addList = ({ list_name, ws_id }) =>
  // apiAxios('main/wsList/list/insert'
  // ,{
  //   list_name: list_name,
  //   ws_id: ws_id}
  // );
  {
    console.log('addList : ' + list_name);
    console.log('addList : ' + ws_id);
    return axios({
      url: 'http://192.168.20.18:8080/test/post',
      method: 'post',
      headers: { 'content-type': 'application/json' },
      data: {
        list_name: list_name,
        ws_id: ws_id,
      },
    });
  };

export const postCard = (ws_id) =>
  apiAxios('/main/wsList/list/card', { ws_id: ws_id });
// axios({
//     url:'/main/wsList/list/card',
//     method: 'post',
//     headers: {'content-type' : 'application/json'},
//     data: {
//     ws_id:ws_id,
//   }
// });
