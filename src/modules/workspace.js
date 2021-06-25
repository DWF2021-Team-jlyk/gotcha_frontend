import AppInitData from "../DummyData/AppInitData";

const ADD_WORKSPACE = "workspace/ADD_WORKSPACE";
const DELETE_WORKSPACE = "workspace/DELETE_WORKSPACE";
// const CHANGE_WORKSPACE_NAME = 'workspace/CHANGE_WORKSPACE_NAME';
const CHANGE_WORKSPACE_FAV = "workspace/CHANGE_WORKSPACE_FAV";

export const addWorkspace = () => ({type: ADD_WORKSPACE});
export const deleteWorkspace = () => ({type: DELETE_WORKSPACE, ws_id});
// export const changeWorkspaceName = () => ({type:CHANGE_WORKSPACE_NAME, ws_id});
export const changeWorkspaceFav = () => ({type: CHANGE_WORKSPACE_FAV, ws_id});

const initialState = [...AppInitData.workspaces];

function workspaceReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_WORKSPACE:
            return [
                ...state,
                {
                    ws_id: action.ws_id,
                    ws_name: action.ws_name,
                    role_id: action.role_id,
                    is_fav: action.is_fav,
                },
            ];
        case CHANGE_WORKSPACE_FAV:
            return state.map((workspace) =>
                workspace.ws_id === action.ws_id
                    ? {...workspace, is_fav: !is_fav}
                    : workspace
            );
        case DELETE_WORKSPACE:
            return state.filter(workspace => workspace.ws_id !== action.ws_id)
    }
}

export default workspaceReducer;
