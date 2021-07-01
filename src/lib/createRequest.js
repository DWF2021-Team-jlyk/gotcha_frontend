export default function createRequest(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (param) => async dispatch => {
    dispatch({type});
    // 요청을 보내고
    try {
      const response = await request(param);
      console.log("param", param)
      console.log("response",response)
      //성공하면
      if(response !== undefined){
      dispatch({
        type:SUCCESS,
        payload:response.data
      })
    }else{dispatch({type:SUCCESS})}
    } catch (e){
      dispatch({
        type:FAILURE,
        payload:e,
        error:true
      });
      throw e;
    }
    
}};