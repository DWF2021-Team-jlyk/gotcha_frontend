import AppInitData from '../DummyData/AppInitData';

const ADD_NOTI = 'notification/ADD_NOTI';
const DELETE_NOTI = 'notification/DELETE_NOTI';
const CHANGE_NOTI_READ = 'notification/CHANGE_NOTI_READ';

export const addNoti = noti => ({ type: ADD_NOTI, noti });
export const deleteNoti = noti_id => ({ type: DELETE_NOTI, noti_id });
export const changeNotiRead = noti_id => ({ type: CHANGE_NOTI_READ, noti_id });

const initialState = [
  ...AppInitData.notifications,
];

function notification(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTI :
      return [
        ...state,
        { ...action.noti },
      ];
    case DELETE_NOTI:
      return state.filter(noti=>noti.noti_id !== action.noti_id);
    case CHANGE_NOTI_READ:
      return state.map(
        noti=>noti.noti_id === action.noti_id ?
          {...noti, noti_read : !noti.noti_read} : noti
      );
    default: return state;
  }
}

export default notification;