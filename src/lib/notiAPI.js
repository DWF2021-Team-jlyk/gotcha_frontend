import apiAxios from './apiAxios';

export const postNoti =
  () => apiAxios('/home/notiList');

export const deleteNoti =
  noti_id => apiAxios('/home/deleteNoti', noti_id);

export const changeNotiCheck =
  noti_id => apiAxios('/home/changeNotiCheck', noti_id);

export const updateNoti =
  noti => apiAxios('/home/updateNoti', noti);