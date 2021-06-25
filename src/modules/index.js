import {combineReducers} from "redux";
import workspaceReducer from "./workspace";

const rootReducer = combineReducers({
    workspaceReducer,
});

export default rootReducer;