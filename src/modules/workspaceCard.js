import * as workspaceAPI from '../lib/workListAPI';
import createRequest from '../lib/createRequest';

const POST_CARD = 'workspace/POST_CARD'
const POST_CARD_SUCCESS = 'workspace/POST_CARD_SUCCESS';
const POST_CARD_FAILURE = 'workspace/POST_CARD_FAILURE'

// export const postCard = ws_id => async dispatch =>{
//   dispatch({type: POST_CARD});
//   try{
//     const response = await workspaceAPI.postCard(ws_id);
//     dispatch({
//       type:POST_CARD_SUCCESS,
//       payload: response.data,
//     });
//   }catch(e){
//     dispatch({
//       type: POST_CARD_FAILURE,
//       payload:e,
//       error: true,
//     });
//     throw e;
//   }
// }

export const postCard = createRequest(POST_CARD, workspaceAPI.postList);

const initialState = {
  loading: {
    POST_CARD: false,
  },
  cards: [],
};

function workspaceCard(state = initialState, action) {
    switch (action.type) {
      case POST_CARD:
        return {
          ...state,
          loading: {
            ...state.loading,
            POST_CARD: true,
          },
        };
      case POST_CARD_SUCCESS:
        return {
          ...state,
          loading: {
            ...state.loading,
            POST_CARD: false,
          },
          cards: action.payload,
        };
      case POST_CARD_FAILURE:
        return {
          ...state,
          loading: {
            ...state.loading,
            POST_CARD: false,
          },
        };
        default:
          return state;
    }
  }
  
  export default workspaceCard;