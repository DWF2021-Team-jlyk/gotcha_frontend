import axios from 'axios';
import { dateFnsLocalizer } from 'react-big-calendar';
import apiAxios from './apiAxios';


// List CRUD axios
export const postList = ({ ws_id }) =>
  apiAxios('/main/wsList/list', { ws_id: ws_id });

export const addList = ({ list_name, ws_id, position }) =>
  apiAxios(
    '/main/wsList/list/insert',
    { list_name: list_name, ws_id: ws_id, position: position },
  );

export const updateList = (data) =>
  apiAxios('/main/wsList/list/update', data);

export const deleteList = (data) =>
  apiAxios('/main/wsList/list/delete', data);

//
export const postCard = ({ ws_id }) =>
  apiAxios('/main/wsList/list/card', { ws_id: ws_id });

export const addCard = ({
                          card_name,
                          card_desc,
                          list_id,
                          ws_id,
                          card_start_date,
                          card_end_date,
                          position,
                          user_id
                        }) =>
  apiAxios('/main/wsList/list/card/insert', {
    card_name: card_name,
    card_desc: card_desc,
    list_id: list_id,
    ws_id: ws_id,
    card_start_date: card_start_date,
    card_end_date: card_end_date,
    position: position,
    user_id: user_id
  });

export const updateCard = (data) =>
  apiAxios('/main/wsList/list/card/update', data);

export const deleteCard = (data) =>
  apiAxios('/main/wsList/list/card/delete', data);

  
export const modifyCardMove = ({
                                 ws_id: ws_id,
                                 list_id: list_id,
                                 position: position,
                                 card_id: card_id
                               }) => 
    apiAxios('/cardDetail/Action/updateCardMove', {
        ws_id: ws_id,
        list_id: list_id,
        position: position,
        card_id: card_id
    });

export const modifyNowPosition = ({list_id: list_id, position:position}) =>
    apiAxios('/cardDetail/Action/updateNowPosition', {
      list_id: list_id, 
      position:position
    });