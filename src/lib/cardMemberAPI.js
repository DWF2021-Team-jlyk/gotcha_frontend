import apiAxios from './apiAxios';

export const postMember =
  card_id => apiAxios('/cardDetail/member/selectList', {card_id:card_id})
  
export const addCardMember = ({user_id, card_id}) =>
  apiAxios('/cardDetail/member/insertCardMember',
    {user_id:user_id, card_id:card_id});

export const removeCardMember = ({user_id, card_id}) => 
  apiAxios('/cardDetail/member/deleteCardMember',
    {user_id:user_id, card_id:card_id});
