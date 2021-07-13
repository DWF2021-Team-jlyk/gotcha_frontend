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

const CARD_UPDATE = 'workspace/CARD_UPDATE';
const CARD_UPDATE_SUCCESS = 'workspace/CARD_UPDATE_SUCCESS';
const CARD_UPDATE_FAILURE = 'workspace/CARD_UPDATE_FAILURE';

const CARD_DELETE = 'workspace/CARD_DELETE';
const CARD_DELETE_SUCCESS = 'workspace/CARD_DELETE_SUCCESS';
const CARD_DELETE_FAILURE = 'workspace/CARD_DELETE_FAILURE';

//card move
const UPDATE_CARD_MOVE = 'cardAction/UPDATE_CARD_MOVE';
const UPDATE_CARD_MOVE_SUCCESS = 'cardAction/UPDATE_CARD_MOVE_SUCCESS';

const UPDATE_CARD_WS_MOVE = 'cardAction/UPDATE_CARD_WS_MOVE';
const UPDATE_CARD_WS_MOVE_SUCCESS = 'cardAction/UPDATE_CARD_WS_MOVE_SUCCESS';

const UPDATE_NOW_POSITION = 'cardAction/UPDATE_NOW_POSITION';
const UPDATE_NOW_POSITION_SUCCESS = 'cardAction/UPDATE_NOW_POSITION_SUCCESS';

export const postCard = createRequest(POST_CARD, api.postCard);
export const cardAdd = createRequest(CARD_ADD, api.addCard);
export const cardUpdate = createRequest(CARD_UPDATE, api.updateCard);
export const cardDelete = createRequest(CARD_DELETE, api.deleteCard);
export const updateCardMove = createRequest(
  UPDATE_CARD_MOVE,
  api.modifyCardMove,
);
export const updateCardWsMove = createRequest(
  UPDATE_CARD_WS_MOVE,
  api.modifyCardMove,
);
export const updateNowPosition = createRequest(
  UPDATE_NOW_POSITION,
  api.modifyNowPosition,
);

const initialState = {
  cards: [],
};

const workspaceCard = handleActions(
  {
    [POST_CARD_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.cards = action.payload;
        draft.cards.sort((card1, card2) => {
          if (card1.position > card2.position) return 1;
          else return -1;
        });
      }),

    [CARD_ADD_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.cards.push(action.payload);
      }),

    [CARD_UPDATE_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        const index = draft.cards.findIndex(
          (card) => card.card_id === action.payload.card_id,
        );
        draft.cards.splice(index, 1, action.payload);
      }),

    [CARD_DELETE_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        const index = draft.cards.findIndex(
          (card) => card.card_id === action.payload.card_id,
        );
        draft.cards.splice(index, 1);
      }),

    //리스트에서만 바꿀때
    [UPDATE_CARD_MOVE_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        const card = draft.cards.find(
          (card) => card.card_id === action.payload.card_id,
          //변하기 전 상태
        );
        const originListId = card.list_id;
        const originPosition = card.position;
        console.log('originListId' , originListId)
        // draft.cards.splice(index, 1, action.payload);
        const cards = draft.cards.map((card) => {
          if (
            card.list_id === action.list_id &&
            card.position >= action.position
          ) {
            card.position = card.position + 1;
          }

          if (
            card.list_id === originListId &&
            card.position >= originPosition
          ) {
            card.position = card.position - 1;
          }

          // if(card.card_id === action.payload.card_id)
          //   card = action.payload;
          if (card.card_id === action.payload.card_id) {
            card.card_id = action.payload.card_id;
            card.list_id = action.payload.list_id;
            card.ws_id = action.payload.ws_id;
            card.position = action.payload.position;
          }
          return card;
        });
        draft.cards = cards;
      }),

    //워크스페이스도 바꿀때
    [UPDATE_CARD_WS_MOVE_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        const card = draft.cards.findIndex(
          (card) => card.card_id === action.payload.card_id,
          //변하기 전 상태
        );
        const originListId = card.list_id;
        console.log('originListId' , originListId)
        const originPosition = card.position;

        const cards = draft.cards.map((card) => {
          if (
            card.list_id === originListId &&
            card.position >= originPosition
          ) {
            card.position = card.position - 1;
          }

          const index = draft.cards.findIndex(
            (card) => card.card_id === action.payload.card_id,
          );

          draft.cards.splice(index, 1);
        
          return card;
        });
        draft.cards = cards;
      }),

    [UPDATE_NOW_POSITION_SUCCESS]: (state, action) =>
      produce(state, (draft) => {}),
  },
  initialState,
);

export default workspaceCard;
