import apiAxios from './apiAxios';


export const postAct =
  card_id => apiAxios('/cardDetail/act/selectList', {card_id:card_id})

export const addCardAct = ({
                              card_id,
                              user_id,
                              islog,
                              act_desc,
                          }) =>
  apiAxios('/cardDetail/act/insertCardAct', {
    card_id :card_id,
    user_id: user_id,
    islog: islog,
    act_desc: act_desc,
  });


export const removeCardAct = 
({act_id}) => apiAxios('/cardDetail/act/deleteCardAct', {act_id: act_id})

export const modifyCardAct = ({
                            card_id,
                            user_id,
                            islog,
                            act_desc,
                            act_id,
                          }) =>
apiAxios('/cardDetail/act/updateCardAct', {
    card_id :card_id,
    user_id: user_id,
    islog: islog,
    act_desc: act_desc,
    act_id:act_id
});
