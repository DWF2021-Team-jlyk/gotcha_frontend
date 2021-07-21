import apiAxios from './apiAxios';

export const postNoti =
  () => apiAxios('/home/notiList');

export const deleteNoti =
  noti_id => {
  return apiAxios('/noti/deleteNoti', noti_id)
};

export const changeNotiCheck =
  noti_id => apiAxios('/noti/toggleNoti', noti_id);

export const updateNoti =
  noti => apiAxios('/home/updateNoti', noti);