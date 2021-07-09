import createRequest from '../lib/createRequest';
import * as api from '../lib/cardTodoAPI';
import { handleActions } from 'redux-actions';
import produce from 'immer';

const POST_CARD_TODO = 'cardDetail/POST_CARD_TODO';
const POST_CARD_TODO_SUCCESS = 'cardDetail/POST_CARD_TODO_SUCCESS';
const POST_CARD_TODO_FAILURE = 'cardDetail/POST_CARD_TODO_FAILURE';

const CARD_TODO_ADD = 'cardDetail/CARD_TODO_ADD';
const CARD_TODO_ADD_SUCCESS = 'cardDetail/CARD_TODO_ADD_SUCCESS';
const CARD_TODO_ADD_FAILURE = 'cardDetail/CARD_TODO_ADD_FAILURE';

const CARD_TODO_UPDATE = 'cardDetail/CARD_TODO_UPDATE';
const CARD_TODO_UPDATE_SUCCESS = 'cardDetail/CARD_TODO_UPDATE_SUCCESS';
const CARD_TODO_UPDATE_FAILURE = 'cardDetail/CARD_TODO_UPDATE_FAILURE';

const CARD_TODO_DELETE = 'cardDetail/CARD_TODO_DELETE';
const CARD_TODO_DELETE_SUCCESS = 'cardDetail/CARD_TODO_DELETE_SUCCESS';
const CARD_TODO_DELETE_FAILURE = 'cardDetail/CARD_TODO_DELETE_FAILURE';

//const CHANGE_TODO_ISDONE = 'cardDetail/CHANGE_TODO_ISDONE';

export const postCardTodo = createRequest(POST_CARD_TODO, api.postTodo);
export const addCardTodo = createRequest(CARD_TODO_ADD, api.addTodo);
export const updateCardTodo = createRequest(CARD_TODO_UPDATE, api.updateTodo);
export const deleteCardTodo = createRequest(CARD_TODO_DELETE, api.deleteTodo);


const initialState = {
  loading : {
    POST_CARD_TODO:false,
  },
  todos : [],
}

const cardTodo = handleActions(
  {
    [POST_CARD_TODO]: (state, action) =>
      produce(state, draft=>{
        draft.loading.POST_CARD_TODO = true;
      }),
    [POST_CARD_TODO_SUCCESS]: (state, action) =>
      produce(state, draft=>{
        draft.loading.POST_CARD_TODO = false;
        draft.todos = action.payload;
      }),
    [POST_CARD_TODO_FAILURE]: (state, action) =>
      produce(state, draft=>{
        draft.loading.POST_CARD_TODO = false;
      }),
    
    [CARD_TODO_ADD]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_CARD_TODO = true;
      }),
    [CARD_TODO_ADD_SUCCESS]: (state, action) =>
      produce (state, draft => {
        draft.loading.POST_CARD_TODO = false;
        draft.todos.push(action.payload);
      }),
    [CARD_TODO_ADD_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_CARD_TODO = false;
      }),
    [CARD_TODO_UPDATE]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_CARD_TODO = true;
      }),
    [CARD_TODO_UPDATE_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_CARD_TODO = false;
        const index = draft.todos
          .findIndex(todo=> todo.todo_id === action.payload.todo_id);
          draft.todos.splice(index, 1, action.payload);
      }),
    [CARD_TODO_UPDATE_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_CARD_TODO = false;
      }),
    [CARD_TODO_DELETE]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_CARD_TODO = true;
      }),
    [CARD_TODO_DELETE_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_CARD_TODO = false;
        const index = draft.todos
          .findIndex(todo=>todo.todo_id === action.payload.todo_id);
        draft.todos.splice(index,1);
      }),
    [CARD_TODO_DELETE_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.loading.POST_CARD_TODO = false;
      }),
  },
  initialState,
);

export default cardTodo;