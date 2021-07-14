import axios from 'axios';

export default function apiAxios(url, data){
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

export function fileAxios(url, data){
  return axios({
    url:url,
    method:'post',
    headers: {
      "Authorization":sessionStorage.getItem("accessToken"),
    },
    data:data,
  }) 
} 