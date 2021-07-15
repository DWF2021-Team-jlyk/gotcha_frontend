import createRequest from '../lib/createRequest';
import * as api from '../lib/cardMemberAPI';
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';


const POST_CARD_MEMBER = 'cardDetail/POST_CARD_MEMBER';
const POST_CARD_MEMBER_SUCCESS = 'cardDetail/POST_CARD_MEMBER_SUCCESS';

const INSERT_CARD_MEMBER = 'cardDetail/INSERT_CARD_MEMBER';
const INSERT_CARD_MEMBER_SUCCESS = 'cardDetail/INSERT_CARD_MEMBER_SUCCESS';

const DELETE_CARD_MEMBER = 'cardDetail/DELETE_CARD_MEMBER';
const DELETE_CARD_MEMBER_SUCCESS = 'cardDetail/DELETE_CARD_MEMBER_SUCCESS';

const UNMOUNT_CARD_MEMBER = 'cardDetail/UNMOUNT_CARD_MEMBER';

export const postCardMember = createRequest(POST_CARD_MEMBER, api.postMember);
export const insertCardMember = createRequest(INSERT_CARD_MEMBER, api.addCardMember);
export const deleteCardMember = createRequest(DELETE_CARD_MEMBER, api.removeCardMember);

export const unmountCardMember = ()=>({type:UNMOUNT_CARD_MEMBER});

const initialState = {
  members: [],
};

const cardMember = handleActions(
  {
    [POST_CARD_MEMBER_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.members = action.payload;
      }),

    [INSERT_CARD_MEMBER_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.members.push(action.payload);
      }),

    [DELETE_CARD_MEMBER_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        const index = 
        draft.members.findIndex(member => member.user_id === action.payload.user_id);
        draft.members.splice(index, 1);
      }),
    [UNMOUNT_CARD_MEMBER]:(state,action)=>
      produce(state, draft=>{
        draft.members = [];
      })
  },
  initialState,
);

export default cardMember;
