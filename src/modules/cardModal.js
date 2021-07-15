import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';
import createRequest from '../lib/createRequest';
import * as api from '../lib/workListAPI';

const REGISTER_CARD = 'cardModal/REGISTER_CARD';

const UPDATE_CARD = 'cardModal/UPDATE_CARD';
const UPDATE_CARD_SUCCESS = 'cardModal/UPDATE_CARD_SUCCESS';

const SHOW_MODAL = 'cardModal/SHOW_MODAL';
const DISAPPEAR_MODAL = 'cardModal/DISAPPEAR_MODAL';

const UNMOUNT_CARD = 'cardModal/UNMOUNT_CARD';

export const registerCard = card => ({ type: REGISTER_CARD, card });
export const showModal = () => ({ type: SHOW_MODAL });
export const disappearModal = () => ({ type: DISAPPEAR_MODAL });
export const unmountCard = () => ({type:UNMOUNT_CARD});

export const updateCard = (card) =>({type:UPDATE_CARD, card});

const initialState = {
  card: {},
  modalShow: false,
};

const cardModal = handleActions({
    [REGISTER_CARD]: (state, action) =>
      produce(state, draft => {
        draft.card = action.card;
      }),
    [UPDATE_CARD]: (state, action) =>
      produce(state, draft => {
        draft.card = action.card;
      }),
    [SHOW_MODAL]: (state, action) =>
      produce(state, draft => {
        draft.modalShow = true;
      }),
    [DISAPPEAR_MODAL]: (state, action) =>
      produce(state, draft => {
        draft.modalShow = false;
      }),
    [UNMOUNT_CARD]:(state, action)=>
      produce(state, draft=>{
        draft.card = {};
      })
  },
  initialState,
);

export default cardModal;