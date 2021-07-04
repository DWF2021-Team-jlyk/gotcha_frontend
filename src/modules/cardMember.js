import createRequest from '../lib/createRequest';
import * as api from '../lib/cardDetailAPI';
import { createAction, handleActions } from 'redux-actions';

const POST_CARD_MEMBER = 'cardDetail/POST_CARD_MEMBER';
const POST_CARD_MEMBER_SUCCESS = 'cardDetail/POST_CARD_MEMBER_SUCCESS';
const POST_CARD_MEMBER_FAILURE = 'cardDetail/POST_CARD_MEMBER_FAILURE';

export const postCardMember = createRequest(POST_CARD_MEMBER, api.postMember);


const initialState = {
  loading: {
    POST_CARD_MEMBER: false,
  },
  members: [],
};

const cardMember = handleActions(
  {
    [POST_CARD_MEMBER]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        POST_CARD_MEMBER: true,
      },
    }),
    [POST_CARD_MEMBER_SUCCESS]: (state, action) => ({
      ...state,
      loading:{
        ...state.loading,
        POST_CARD_MEMBER: false,
      },
      members: action.payload,
    }),
    [POST_CARD_MEMBER_FAILURE]: (state, action) => ({
      ...state,
      loading:{
        ...state.loading,
        POST_CARD_MEMBER: false,
      },
    }),
  },
  initialState,
);

export default cardMember;