import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const GET_CARD_ID = 'cardId/GET_CARD_ID';

export const getCardId = card_id=> ({type:GET_CARD_ID, card_id});

const initialState = 0

const cardId = handleActions(
  {
    [GET_CARD_ID]: (state, action) =>
      produce(state, draft => {
        draft = action.card_id;
      }),
  },
  initialState,
);

export default cardId;
