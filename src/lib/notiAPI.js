import apiAxios from './apiAxios';

export const postGetNoti =
  user_id => apiAxios('/main/notiList', { user_id: user_id });

export const postDeleteNoti =
  noti_id => apiAxios('/home/deleteNoti', {noti_id:noti_id});

export const postUpdateNoti =
  noti => apiAxios('/home/updateNoti', {noti});