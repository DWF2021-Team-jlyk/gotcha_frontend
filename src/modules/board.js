import createRequest from '../lib/createRequest';
import { postBoard ,updateBoard, deleteBoard, addBoard, showBoardPost } from '../lib/boardAPI';
import { handleActions } from 'redux-actions';
import produce from 'immer';

const POST_BOARD = 'workspaceBoard/POST_BOARD';
const POST_BOARD_SUCCESS = 'workspaceBoard/POST_BOARD_SUCCESS';

const BOARD_UPDATE = 'workspaceBoard/BOARD_UPDATE';
const BOARD_UPDATE_SUCCESS = 'workspaceBoard/BOARD_UPDATE_SUCCESS';

const BOARD_DELETE = 'workspaceBoard/BOARD_DELETE';
const BOARD_DELETE_SUCCESS = 'workspaceBoard/BOARD_DELETE_SUCCESS';

const BOARD_ADD = 'workspaceBoard/BOARD_ADD';
const BOARD_ADD_SUCCESS = 'workspaceBoard/BOARD_ADD_SUCCESS';


export const postboard = createRequest(POST_BOARD, postBoard);
export const updateboard = createRequest(BOARD_UPDATE,updateBoard);
export const deleteboard = createRequest(BOARD_DELETE,deleteBoard);
export const addboard = createRequest(BOARD_ADD, addBoard);


const initialState = {
  loading:{
    POST_BOARD:false,
  },
  boards : [],
}

const workspaceBoard = handleActions(
  {
    [POST_BOARD_SUCCESS]: (state, action) =>
      produce(state, draft=>{
        draft.loading.POST_BOARD = false;
        draft.boards = action.payload;
        // draft.boards.sort((board1, board2) => {
        //   if(board1.board_id > board2.board_id){
        //     return 1;
        //   }
        //   else return -1;
        // });
      }),
    [BOARD_UPDATE_SUCCESS]:(state,action)=>
      produce(state, draft=>{
        draft.loading.POST_BOARD=false;
        const index = draft.boards
        .findIndex(board => board.id === action.payload.id);
        draft.boards.splice(index,1,action.payload);
      }),
    [BOARD_DELETE_SUCCESS]:(state, action)=>
      produce(state, draft=>{
        draft.loading.POST_BOARD=false;
        const index = draft.boards
        .findIndex(board => board.id === action.payload.id);
        draft.boards.splice(index,1);
      }),
      [BOARD_ADD_SUCCESS]:(state, action)=>
      produce(state, draft=>{
        draft.boards.unshift(action.payload);
      }),

      // [POST_BOARD_SUCCESS]:(state, action) =>
      // produce(state, draft=>{
      //   draft.loading.POST_BOARD = false;
      //   draft.boards = action.payload;
      //}),
    },
  initialState,
);

export default workspaceBoard;