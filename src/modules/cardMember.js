import createRequest from '../lib/createRequest';
import * as api from '../lib/cardDetailAPI';
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const POST_CARD_MEMBER = 'cardDetail/POST_CARD_MEMBER';
const POST_CARD_MEMBER_SUCCESS = 'cardDetail/POST_CARD_MEMBER_SUCCESS';
const POST_CARD_MEMBER_FAILURE = 'cardDetail/POST_CARD_MEMBER_FAILURE';

const INSERT_CARD_MEMBER = 'cardDetail/INSERT_CARD_MEMBER';
const INSERT_CARD_MEMBER_SUCCESS = 'cardDetail/INSERT_CARD_MEMBER_SUCCESS';

export const postCardMember = createRequest(POST_CARD_MEMBER, api.postMember);
export const insertCardMember = createRequest(
  INSERT_CARD_MEMBER,
  api.addCardMember,
);

const initialState = {
  members: [],
};

const cardMember = handleActions(
  {
    [POST_CARD_MEMBER_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.todos = action.payload;
      }),
    [INSERT_CARD_MEMBER_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.members.push(action.payload);
      }),
  },
  initialState,
);

export default cardMember;
