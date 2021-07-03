import apiAxios from './apiAxios';

export const postMember =
  card_id => apiAxios('/cardDetail/member', {card_id:card_id})

export const postTodo =
  card_id => apiAxios('/cardDetail/todo', {card_id:card_id})

export const postFile =
  card_id => apiAxios('/cardDetail/file', {card_id:card_id})

export const postAct =
  card_id => apiAxios('/cardDetail/act', {card_id:card_id})