import apiAxios from './apiAxios';

export const postGetWorkspaces = () => apiAxios('/home/wsList', null);

export const postAddWorkspace = ({ formData }) =>
  apiAxios('/home/addWorkspace', formData);

export const updateWorkspace = (data) =>
  apiAxios('/home/favUpdate', data);

export const postGetWorkspaceMembers = (ws_id) =>
  apiAxios('/home/wsUserList', { ws_id: ws_id });

export const updateWorkspaceName = (data) => 
  apiAxios('/home/updateWsName', data);

export const getFileName = (ws_id) => {
  apiAxios('/home/getFileName', { ws_id:ws_id });
}

export const postInviteMember = ({emailList}) => {
  apiAxios('/home/inviteMember', emailList);
}