import { combineReducers } from 'redux';
import workspaces from './workspace';

const rootReducer = combineReducers({
  workspaces,
});

export default rootReducer;