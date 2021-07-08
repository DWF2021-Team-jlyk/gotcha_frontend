import * as api from '../lib/workListAPI';
import createRequest from '../lib/createRequest';

const POST_CARD = 'workspace/POST_CARD';
const POST_CARD_SUCCESS = 'workspace/POST_CARD_SUCCESS';
const POST_CARD_FAILURE = 'workspace/POST_CARD_FAILURE';

const CARD_ADD = 'workspace/CARD_ADD';
const CARD_UPDATE_SUCCESS = 'workspace/CARD_UPDATE_SUCCESS';
const CARD_DELETE = 'workspace/CARD_DELETE';

export const postCard = createRequest(POST_CARD, api.postCard);
export const cardAdd = card =>({type:CARD_ADD, card});
export const cardUpdate = card =>({type:CARD_UPDATE_SUCCESS, card});
export const cardDelete = card_id =>({type:CARD_DELETE, card_id});


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

      case CARD_ADD:
        return{
          ...state,
          cards: state.cards.concat(action.card)
        };
      
        case CARD_UPDATE_SUCCESS:
          return{
            ...state,
            cards: state.cards.map(
             card => card.card_id === action.card.card_id?
             {...action.card} : card 
            )
          };

        case CARD_DELETE:
          return{
            ...state,
            cards: state.cards.filter(
              card => card.card_id !== action.card_id 
            )
          };
        default:
          return state;
    };
  };
  
  export default workspaceCard;