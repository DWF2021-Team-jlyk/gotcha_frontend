import apiAxios from './apiAxios';

export const postBoard = (ws_id) =>
  apiAxios('/board', {
    ws_id: ws_id,
  });

export const addBoard = (data) => 
apiAxios('/board/insert', data);

export const updateBoard = (data) =>
  apiAxios('/board/update', 
    data);

export const deleteBoard = (id) =>
  apiAxios('/board/delete', {
    id: id,
  });
