import { combineReducers } from 'redux';
import workspaces from './workspaces';
import notification from './notification';
import workspaceList from './workspaceList';
import workspaceCard from './workspaceCard';
import cardMember from './cardMember'
import workspaceMember from './workspaceMember'
import insertCardMember from './cardMember'
import addList from './addList';
import loading from './loading';
import cardId from './cardId';

const rootReducer = combineReducers({
  workspaces,
  notification,
  workspaceList,
  workspaceCard,
  addList,
  loading,
  cardMember,
  workspaceMember,
  insertCardMember,
  cardId
});

export default rootReducer;