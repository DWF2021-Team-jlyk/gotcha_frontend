import * as api from '../lib/workListAPI';
import createRequest from '../lib/createRequest';
import { handleActions } from 'redux-actions';
import produce from 'immer';

const POST_CARD = 'workspace/POST_CARD';
const POST_CARD_SUCCESS = 'workspace/POST_CARD_SUCCESS';
const POST_CARD_FAILURE = 'workspace/POST_CARD_FAILURE';

const CARD_ADD = 'workspace/CARD_ADD';
const CARD_ADD_SUCCESS = 'workspace/CARD_ADD_SUCCESS';
const CARD_ADD_FAILURE = 'workspace/CARD_ADD_FAILURE';

const CARD_UPDATE = 'workspace/CARD_UPDATE'
const CARD_UPDATE_SUCCESS = 'workspace/CARD_UPDATE_SUCCESS';
const CARD_UPDATE_FAILURE = 'workspace/CARD_UPDATE_FAILURE';

const CARD_DELETE = 'workspace/CARD_DELETE';
const CARD_DELETE_SUCCESS = 'workspace/CARD_DELETE_SUCCESS';
const CARD_DELETE_FAILURE = 'workspace/CARD_DELETE_FAILURE';

export const postCard = createRequest(POST_CARD, api.postCard);
export const cardAdd = createRequest(CARD_ADD, api.addCard);
export const cardUpdate = createRequest(CARD_UPDATE, api.updateCard);
export const cardDelete = createRequest(CARD_DELETE, api.deleteCard);

const initialState = {
  loading: {
    POST_CARD: false,
  },
  cards: [],
};

const workspaceCard = handleActions(
  {
    [POST_CARD]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_CARD = true;
      }),
    [POST_CARD_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_CARD = false;
        draft.cards = action.payload;
      }),
    [POST_CARD_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_CARD = false;
      }),//이까진 성공
    [CARD_ADD]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_CARD = true;
      }),
    [CARD_ADD_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_CARD = false;
        draft.cards.push(action.payload);
      }),
    [CARD_ADD_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_CARD = false;
      }),
    [CARD_UPDATE]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_CARD = true;
      }),
    [CARD_UPDATE_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_CARD = false;
        draft.cards.find(card=> card.card_id === action.payload.card_id);
      }),
    [CARD_UPDATE_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_CARD = false;
      }),
    [CARD_DELETE]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_CARD = true;
      }),
    [CARD_DELETE_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_CARD = false;
        const index = draft.cards
          .findIndex(card=>card.card_id === action.payload.card_id);
        draft.cards.splice(index,1);
      }),
    [CARD_DELETE_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_CARD = false;
      }),
  },
  initialState,
);

  
  export default workspaceCard;