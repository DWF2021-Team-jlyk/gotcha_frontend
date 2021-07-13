import createRequest from '../lib/createRequest';
import { postFile } from '../lib/cardFileAPI';
import { handleActions } from 'redux-actions';
import produce from 'immer';

const POST_CARD_FILE = 'cardDetail/POST_CARD_FILE';
const POST_CARD_FILE_SUCCESS = 'cardDetail/POST_CARD_FILE_SUCCESS';

export const postCardFile = createRequest(POST_CARD_FILE, postFile);

const initialState = {
  files : [],
}

const cardFile = handleActions(
  {
    [POST_CARD_FILE_SUCCESS]: (state, action) =>
      produce(state, draft=>{
        draft.loading.POST_CARD_FILE = false;
        draft.todos = action.payload;
      }),
  },
  initialState,
);

export default cardFile;