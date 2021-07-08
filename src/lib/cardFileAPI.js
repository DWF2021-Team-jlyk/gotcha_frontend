import apiAxios from './apiAxios';

export const postFile =
  card_id => apiAxios('/cardDetail/file', {card_id:card_id})
