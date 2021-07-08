import apiAxios from './apiAxios';

export const postNoti =
  () => apiAxios('/home/notiList');

export const postDeleteNoti =
  noti_id => apiAxios('/home/deleteNoti', {noti_id:noti_id});

export const postUpdateNoti =
  noti => apiAxios('/home/updateNoti', {noti});