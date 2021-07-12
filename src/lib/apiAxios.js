import axios from 'axios';

export default function apiAxios(url, data){

  return axios({
    url:url,
    method:'post',
    headers: {'content-type' : 'application/json'},
    data:{
      ...data
    }
  })
}