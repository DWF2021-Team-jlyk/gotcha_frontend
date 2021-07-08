import apiAxios from './apiAxios';

export const postTodo =
  card_id => apiAxios('/cardDetail/todo', {card_id:card_id})

