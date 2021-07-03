import createRequest from '../lib/createRequest';
import { postFile } from '../lib/cardDetailAPI';
import { handleActions } from 'redux-actions';
import produce from 'immer';

const POST_CARD_FILE = 'cardDetail/POST_CARD_FILE';
const POST_CARD_FILE_SUCCESS = 'cardDetail/POST_CARD_FILE_SUCCESS';
const POST_CARD_FILE_FAILURE = 'cardDetail/POST_CARD_FILE_FAILURE';

export const postCardFile = createRequest(POST_CARD_FILE, postFile);

const initialState = {
  loading : {
    POST_CARD_FILE:false,
  },
  todos : [],
}

const cardFile = handleActions(
  {
    [POST_CARD_FILE]: (state, action) =>
      produce(state, draft=>{
        draft.loading.POST_CARD_FILE = true;
      }),
    [POST_CARD_FILE_SUCCESS]: (state, action) =>
      produce(state, draft=>{
        draft.loading.POST_CARD_FILE = false;
        draft.todos = action.payload;
      }),
    [POST_CARD_FILE_FAILURE]: (state, action) =>
      produce(state, draft=>{
        draft.loading.POST_CARD_FILE = false;
      }),
  },
  initialState,
);

export default cardFile;