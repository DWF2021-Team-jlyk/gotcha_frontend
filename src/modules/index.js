import { combineReducers } from 'redux';
import workspaces from './workspaces';
import notification from './notification';
import workspaceList from './workspaceList';
import workspaceCard from './workspaceCard';
import addList from './addList';
import { FaAllergies } from 'react-icons/fa';

const rootReducer = combineReducers({
  workspaces,
  notification,
  workspaceList,
  workspaceCard,
  addList,
});

export default rootReducer;