import createRequest from '../lib/createRequest';
import { showBoardPost } from '../lib/boardAPI';
import { handleActions } from 'redux-actions';
import produce from 'immer';

const BOARD_SHOW_POST = 'workspaceBoard/BOARD_SHOW_POST';
const BOARD_SHOW_POST_SUCCESS = 'workspaceBoard/BOARD_SHOW_POST_SUCCESS';

const BOARD_UNMOUNT = 'workspaceBoard/BOARD_UNMOUNT';

export const showboardPost = createRequest(BOARD_SHOW_POST, showBoardPost);
export const boardUnmout = () => ({type:BOARD_UNMOUNT});

const initialState = {
  loading: {
    POST_BOARD: false,
  },
  board: null,
};

const boardId = handleActions(
  {
    [BOARD_SHOW_POST_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.loading.POST_BOARD = false;
        draft.board = action.payload;
      }),
    [BOARD_UNMOUNT]:(state, action) =>
      produce(state, draft=>{
        draft.board = null;
      })
  },
  initialState,
);

export default boardId;
