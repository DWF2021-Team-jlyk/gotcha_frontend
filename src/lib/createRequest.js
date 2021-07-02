import { startLoading, finishLoading } from '../modules/loading';

export default function createRequest(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (param) => async dispatch => {
    dispatch({ type });
    // dispatch(startLoading(type));
    // 요청을 보내고
    try {
      const response = await request(param);
      //성공하면
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
      // dispatch(finishLoading(type));
    } catch (e) {
      //실패하면
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      });
      // dispatch(startLoading(type));
      throw e;
    }
  };
}