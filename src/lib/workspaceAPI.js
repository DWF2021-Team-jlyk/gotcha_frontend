import apiAxios from './apiAxios';

export const postGetWorkspaces =
  user_id => apiAxios('/home/wsList', {user_id:user_id});

export const updateWorkspace =
  data => apiAxios('/home/updateWorkspace', data);