import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';

const REGISTER_CARD = 'cardModal/REGISTER_CARD';

export const registerCard = card => ({ type: REGISTER_CARD, card });

const initialState = {};

const cardForModal = handleActions({
    [REGISTER_CARD]: (state, action) =>
      produce(state, draft => {
        draft.card = action.card;
      }),
  },
  initialState
);

export default cardForModal;