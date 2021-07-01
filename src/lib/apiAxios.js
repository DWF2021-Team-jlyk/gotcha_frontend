import axios from 'axios';

export default function apiAxios(url, data){
  console.log("apiAxiosdata", url);
  console.log("apiAxiosdata", data);
  return axios({
    url:url,
    method:'post',
    headers: {'content-type' : 'application/json'},
    data:JSON.stringify(data)
  })
}