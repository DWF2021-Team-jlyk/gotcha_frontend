import axios from 'axios';
import { dateFnsLocalizer } from 'react-big-calendar';
import apiAxios from './apiAxios';

// List CRUD axios
export const postList = ({ ws_id }) =>
  apiAxios('/main/wsList/list', { ws_id: ws_id });

export const addList = ({ list_name, ws_id }) =>
  apiAxios('/main/wsList/list/insert', { list_name: list_name, ws_id: ws_id });

export const updateList = ({ list_name, ws_id, list_id }) =>
  apiAxios('/main/wsList/list/update', {
    list_name: list_name,
    ws_id: ws_id,
    list_id: list_id,
  });

export const deleteList = ({ list_id }) =>
  apiAxios('/main/wsList/list/delete', {
    list_id: list_id,
  });

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
                        }) =>
  apiAxios('/main/wsList/list/card/insert', {
    card_name: card_name,
    card_desc: card_desc,
    list_id: list_id,
    ws_id: ws_id,
    card_start_date: card_start_date,
    card_end_date: card_end_date,
  });

export const updateCard = ({
                             card_id,card_name, card_desc, list_id, ws_id, card_isdone,
                             card_start_date, card_end_date,
                           }) =>
  apiAxios('/main/wsList/list/card/update',
    {
      card_id:card_id,
      card_name: card_name,
      card_desc: card_desc,
      list_id: list_id,
      card_isdone: card_isdone,
      ws_id: ws_id,
      card_start_date: card_start_date,
      card_end_date: card_end_date,
    });

export const deleteCard = ({ card_id }) =>
  apiAxios('/main/wsList/list/card/delete', {
    card_id: card_id,
  });
