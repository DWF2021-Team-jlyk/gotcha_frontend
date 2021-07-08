import { combineReducers } from 'redux';
import workspace from './workspace';
import notification from './notification';
import workspaceList from './workspaceList';
import workspaceCard from './workspaceCard';
import loading from './loading';
import cardTodo from './cardTodo';
import cardAct from './cardAct';
import cardFile from './cardFile';
import cardMember from './cardMember';
import cardId from './cardId';

const rootReducer = combineReducers({
  workspace,
  notification,
  workspaceList,
  workspaceCard,
  cardTodo,
  cardAct,
  cardFile,
  cardMember,
  cardId,
  loading
});

export default rootReducer;