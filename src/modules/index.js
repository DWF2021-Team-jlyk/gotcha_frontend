import { combineReducers } from 'redux';
import workspaces from './workspaces';
import notification from './notification';
import workspaceList from './workspaceList';
import workspaceCard from './workspaceCard';
import addList from './addList';
import loading from './loading';

const rootReducer = combineReducers({
  workspaces,
  notification,
  workspaceList,
  workspaceCard,
  addList,
  loading,
});

export default rootReducer;