import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';
import createRequest from '../lib/createRequest';
import * as api from '../lib/workListAPI';

const REGISTER_CARD = 'cardModal/REGISTER_CARD';

const UPDATE_CARD = 'cardModal/UPDATE_CARD';
const UPDATE_CARD_SUCCESS = 'cardModal/UPDATE_CARD_SUCCESS';

export const registerCard = card => ({ type: REGISTER_CARD, card });
export const updateCard = createRequest(UPDATE_CARD, api.updateCard);

const initialState = {
  card : {}
};

const cardForModal = handleActions({
    [REGISTER_CARD]: (state, action) =>
      produce(state, draft => {
        draft.card = action.card;
      }),
    [UPDATE_CARD_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.card = action.payload;
      }),
  },
  initialState,
);

export default cardForModal;