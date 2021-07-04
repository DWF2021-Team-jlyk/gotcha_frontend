import createRequest from '../lib/createRequest';
import { postAct } from '../lib/cardDetailAPI';
import { handleActions } from 'redux-actions';
import produce from 'immer';

const POST_CARD_ACT = 'cardDetail/POST_CARD_ACT';
const POST_CARD_ACT_SUCCESS = 'cardDetail/POST_CARD_ACT_SUCCESS';
const POST_CARD_ACT_FAILURE = 'cardDetail/POST_CARD_ACT_FAILURE';

export const postCardAct = createRequest(POST_CARD_ACT, postAct);

const initialState = {
  acts : [],
}

const cardAct = handleActions(
  {
    [POST_CARD_ACT_SUCCESS]: (state, action) =>
      produce(state, draft=>{
        draft.loading.POST_CARD_ACT = false;
        draft.todos = action.payload;
      }),
  },
  initialState,
);

export default cardAct;