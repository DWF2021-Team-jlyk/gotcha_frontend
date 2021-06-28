import { combineReducers } from 'redux';
import workspaces from './workspaces';
import notification from './notification';
import workspace from './workspaces';

const rootReducer = combineReducers({
  workspaces,
  notification,
  workspace,
});

export default rootReducer;