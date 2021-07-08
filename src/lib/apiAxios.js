import axios from 'axios';

export default function apiAxios(url, data){
  console.log("apiAxios : "+data);
  console.log(data);
  return axios({
    url:url,
    method:'post',
    headers: {
      "Authorization":sessionStorage.getItem("accessToken"),
      'content-type' : 'application/json',
    },
    data:{
      ...data,
    }
  })
}