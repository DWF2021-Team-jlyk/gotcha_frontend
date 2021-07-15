import createRequest from '../lib/createRequest';
import * as api from '../lib/cardActAPI';
import { handleActions } from 'redux-actions';
import produce from 'immer';

const POST_CARD_ACT = 'cardDetail/POST_CARD_ACT';
const POST_CARD_ACT_SUCCESS = 'cardDetail/POST_CARD_ACT_SUCCESS';

const INSERT_CARD_ACT = 'cardDetail/INSERT_CARD_ACT';
const INSERT_CARD_ACT_SUCCESS = 'cardDetail/INSERT_CARD_ACT_SUCCESS';

const DELETE_CARD_ACT = 'cardDetail/DELETE_CARD_ACT';
const DELETE_CARD_ACT_SUCCESS = 'cardDetail/DELETE_CARD_ACT_SUCCESS';

const UPDATE_CARD_ACT = 'cardDetail/UPDATE_CARD_ACT';
const UPDATE_CARD_ACT_SUCCESS = 'cardDetail/UPDATE_CARD_ACT_SUCCESS';

const UNMOUNT_CARD_ACT = 'cardDetail/UNMOUNT_CARD_ACT';

export const postCardAct = createRequest(POST_CARD_ACT, api.postAct);
export const insertCardAct = createRequest(INSERT_CARD_ACT, api.addCardAct);
export const deleteCardAct = createRequest(DELETE_CARD_ACT, api.removeCardAct);
export const updateCardAct = createRequest(UPDATE_CARD_ACT, api.modifyCardAct);

export const unmountCardAct = ()=>({type:UNMOUNT_CARD_ACT})

const initialState = {
  acts: [],
};

const cardAct = handleActions(
  {
    [POST_CARD_ACT_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.acts = action.payload;
      }),

    [INSERT_CARD_ACT_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.acts.unshift(action.payload);
      }),

    [DELETE_CARD_ACT_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        const index = draft.acts.findIndex(
          (act) => act.act_id === action.payload.act_id,
        );
        draft.acts.splice(index, 1);
      }),

    [UPDATE_CARD_ACT_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        const index = draft.acts.findIndex(
          (act) => act.act_id === action.payload.act_id,
        );
        draft.acts.splice(index, 1, action.payload);
      }),
    [UNMOUNT_CARD_ACT]:(state, action)=>
      produce(state, draft=>{
        draft.acts = [];
      })
  },
  initialState,
);

export default cardAct;
