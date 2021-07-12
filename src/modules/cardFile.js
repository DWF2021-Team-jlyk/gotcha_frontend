import createRequest from '../lib/createRequest';
import { postFile ,updateFile, deleteFile } from '../lib/cardFileAPI';
import { handleActions } from 'redux-actions';
import produce from 'immer';

const POST_CARD_FILE = 'cardDetail/POST_CARD_FILE';
const POST_CARD_FILE_SUCCESS = 'cardDetail/POST_CARD_FILE_SUCCESS';
const POST_CARD_FILE_FAILURE = 'cardDetail/POST_CARD_FILE_FAILURE';

const CARD_FILE_UPDATE = 'cardDetail/CARD_FILE_UPDATE';
const CARD_FILE_UPDATE_SUCCESS = 'cardDetail/FILE_UPDATE_SUCCESS';

const CARD_FILE_DELETE = 'cardDetail/CARD_FILE_DELETE';
const CARD_FILE_DELETE_SUCCESS = 'cardDetail/CARD_FILEDELETE_SUCCESS';

export const postCardFile = createRequest(POST_CARD_FILE, postFile);
export const updateCardFile = createRequest(CARD_FILE_UPDATE,updateFile);
export const deleteCardFile = createRequest(CARD_FILE_DELETE,deleteFile);

const initialState = {
  loading:{
    POST_CARD_FILE:false,
  },
  files : [],
}

const cardFile = handleActions(
  {
    [POST_CARD_FILE_SUCCESS]: (state, action) =>
      produce(state, draft=>{
        draft.loading.POST_CARD_FILE = false;
        draft.files = action.payload;
      }),
    [CARD_FILE_UPDATE_SUCCESS]:(state,action)=>
      produce(state, draft=>{
        draft.loading.POST_CARD_FILE=false;
        const index = draft.files
        .findIndex(file => file.file_id === action.payload.file_id);
        draft.files.splice(index,1,action.payload);
      }),
    [CARD_FILE_DELETE_SUCCESS]:(state,action)=>
      produce(state, draft =>{
        draft.loading.POST_CARD_FILE=false;
        const index = draft.files
        .findIndex(file=> file.file_id === action.payload.file_id);
        draft.files.splice(index,1);
      }),
    },
  initialState,
);

export default cardFile;