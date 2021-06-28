import { combineReducers } from 'redux';
import workspaces from './workspaces';
import notification from './notification';
import workspaceList from './workspaceList';
import workspaceCard from './workspaceCard';

const rootReducer = combineReducers({
  workspaces,
  notification,
  workspaceList,
  workspaceCard,
});

export default rootReducer;