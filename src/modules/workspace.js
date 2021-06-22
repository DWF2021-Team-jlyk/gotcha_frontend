import AppInitData from "../DumiData/AppInitData";

const ADD_WORKSPACE = "workspace/ADD_WORKSPACE";
const MODIFY_WORKSPACE = "workspace/MODIFY_WORKSPACE";
const DELETE_WORKSPACE = "workspace/DELETE_WORKSPACE";

const initialState = {
    admin : [...AppInitData.admin],
    fav : [...AppInitData.fav],
    member : [...AppInitData.member]
}

function workspace(state=initialState, action){
    switch(action.type) {
        case ADD_WORKSPACE :
            return {
                ...state,
                admin: state.admin.concat(action.admin)
            };
        case MODIFY_WORKSPACE:
            return {
                ...state,

            };
        case DELETE_WORKSPACE:
            return {};
        default:
            return state;
    }
}