import axios from 'axios';

export default function apiAxios(url, data){
  console.log(data);
  console.log("apiAxios:: log " + data);
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

export function fileAxios(url,file){
  const formData = new FormData();

  formData.append('file',file);

  return axios({
    url:url,
    method:'POST',
    headers:{
      "Authorization": sessionStorage.getItem('accessToken'),
    },
    data:{
      formData
    },

  })

};

