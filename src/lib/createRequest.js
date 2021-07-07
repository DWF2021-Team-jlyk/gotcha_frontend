import { startLoading, finishLoading } from '../modules/loading';

export default function createRequest(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (params) => async dispatch => {
    dispatch({ type });
    dispatch(startLoading(type));
    console.log("params : " + params);
    // 요청을 보내고
    try {
      const response = await request(params);
      //성공하면
      if (response !== undefined) {
        dispatch({
          type: SUCCESS,
          payload: response.data,
        });
        dispatch(finishLoading(type));
      } else {
        throw 'response undefined error';
      }
    } catch (e) {
      //실패하면
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      });
      dispatch(startLoading(type));
      throw e;
    }
  };
};
