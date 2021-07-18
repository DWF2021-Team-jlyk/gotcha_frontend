import { combineReducers } from 'redux';
import workspace from './workspace';
import notification from './notification';
import workspaceList from './workspaceList';
import workspaceCard from './workspaceCard';
import cardMember from './cardMember'
import workspaceMember from './workspaceMember'
import insertCardMember from './cardMember'
//import addList from './addList';
import loading from './loading';
import cardTodo from './cardTodo';
import cardAct from './cardAct';
import cardFile from './cardFile';
import userInfo from './userInfo'
import cardModal from './cardModal';
import workspaceBoard from './board';
import boardId from './boardId';

const rootReducer = combineReducers({
  workspace,
  notification,
  workspaceList,
  workspaceCard,
  cardTodo,
  cardAct,
  cardFile,
  cardMember,
  loading,
  workspaceMember,
  insertCardMember,
  cardModal,
  userInfo,
  workspaceBoard,
  boardId,
});

export default rootReducer;