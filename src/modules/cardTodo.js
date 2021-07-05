import createRequest from '../lib/createRequest';
import { postTodo } from '../lib/cardDetailAPI';
import { handleActions } from 'redux-actions';
import produce from 'immer';

const POST_CARD_TODO = 'cardDetail/POST_CARD_TODO';
const POST_CARD_TODO_SUCCESS = 'cardDetail/POST_CARD_TODO_SUCCESS';
const POST_CARD_TODO_FAILURE = 'cardDetail/POST_CARD_TODO_FAILURE';

export const postCardTodo = createRequest(POST_CARD_TODO, postTodo);

const initialState = {
  todos : [],
}

const cardTodo = handleActions(
  {
    [POST_CARD_TODO_SUCCESS]: (state, action) =>
      produce(state, draft=>{
        draft.loading.POST_CARD_TODO = false;
        draft.todos = action.payload;
      }),
  },
  initialState,
);

export default cardTodo;