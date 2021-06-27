import { combineReducers } from 'redux';
import workspaces from './workspace';
import notification from './notification';

const rootReducer = combineReducers({
  workspaces,
  notification,
});

export default rootReducer;