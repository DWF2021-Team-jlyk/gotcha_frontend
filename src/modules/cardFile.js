import createRequest from '../lib/createRequest';
import { postFile ,updateFile, deleteFile, addFile } from '../lib/cardFileAPI';
import { handleActions } from 'redux-actions';
import produce from 'immer';

const POST_CARD_FILE = 'cardDetail/POST_CARD_FILE';
const POST_CARD_FILE_SUCCESS = 'cardDetail/POST_CARD_FILE_SUCCESS';

const CARD_FILE_UPDATE = 'cardDetail/CARD_FILE_UPDATE';
const CARD_FILE_UPDATE_SUCCESS = 'cardDetail/FILE_UPDATE_SUCCESS';

const CARD_FILE_DELETE = 'cardDetail/CARD_FILE_DELETE';
const CARD_FILE_DELETE_SUCCESS = 'cardDetail/CARD_FILE_DELETE_SUCCESS';

const CARD_FILE_ADD = 'cardDetail/CARD_FILE_ADD';
const CARD_FILE_ADD_SUCCESS = 'cardDetail/CARD_FILE_ADD_SUCCESS';

export const postCardFile = createRequest(POST_CARD_FILE, postFile);
export const updateCardFile = createRequest(CARD_FILE_UPDATE,updateFile);
export const deleteCardFile = createRequest(CARD_FILE_DELETE,deleteFile);
export const addCardFile = createRequest(CARD_FILE_ADD, addFile);

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
        draft.files.sort((file1, file2) => {
          if(file1.file_id > file2.file_id){
            return 1;
          }
          else return -1;
        });
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
      [CARD_FILE_ADD_SUCCESS]:(state, action)=>
      produce(state, draft=>{
        draft.files.push(action.payload);
        draft.files.sort((file1, file2) => {
          if(file1.file_id > file2.file_id){
            return 1;
          }
          else return -1;
        });
      }),
    },
  initialState,
);

export default cardFile;