import apiAxios from './apiAxios';

export const postGetWorkspaces =
  () => apiAxios('/home/wsList', null);

export const postAddWorkspace = 
  ({formData}) => apiAxios('/home/addWorkspace',formData);

export const updateWorkspace =
  data => apiAxios('/home/updateWorkspace', data);