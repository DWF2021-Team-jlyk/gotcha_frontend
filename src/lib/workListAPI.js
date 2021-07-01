import apiAxios from './apiAxios';

export const postList = (ws_id) =>
  apiAxios('/main/wsList/list', { ws_id: ws_id });


export const addList = ( list_name, ws_id ) =>
apiAxios('/main/wsList/list/insert', { list_name:list_name,ws_id:ws_id});

  // {
  //   return axios({
  //     url:'main/wsList/list/insert',
  //     method:'post',
  //     headers: {'content-type' : 'application/json'},
  //     data:{
  //       list_name:list_name,
  //       ws_id: ws_id,
  //     }
  //   })
  // }


export const postCard = (ws_id) =>
  apiAxios('/main/wsList/list/card', { ws_id: ws_id });
