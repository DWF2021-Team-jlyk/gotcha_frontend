import apiAxios from './apiAxios';

export const postGetWorkspaces =
  user_id => apiAxios('/home/wsList', {user_id:user_id});

export const postGetWorkspaceMembers = 
  ws_id => apiAxios('/home/wsUserList', { ws_id: ws_id });
