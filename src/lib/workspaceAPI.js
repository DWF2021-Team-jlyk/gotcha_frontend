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

export const getWorkspaceDetail = workspaceId =>
  axios.get(`/main/wsList/list/card`);

