import apiAxios from './apiAxios';

export const postGetWorkspaces = () => apiAxios('/home/wsList', null);

export const postAddWorkspace = ({ formData }) =>
  apiAxios('/home/addWorkspace', formData);

export const updateWorkspace = (data) =>
  apiAxios('/home/updateWorkspace', data);

export const postGetWorkspaceMembers = (ws_id) =>
  apiAxios('/home/wsUserList',  ws_id);
