import axios from 'axios';

export const workspaceInvite = async (workspace, userId) => {
  const response = await axios({
    url:"/noti/inviteNoti",
    method:"post",
    headers:{
      "Authorization":sessionStorage.getItem("accessToken"),
      'content-type' : 'application/json',
    },
    data:{
      workspace:workspace,
      userId:userId,
    }
  })
  return response.data;
}

export const cardNoti = async (card, userId) => {
  const response = await axios({
    url:"/noti/cardNoti",
    method:"post",
    headers:{
      "Authorization":sessionStorage.getItem("accessToken"),
      'content-type' : 'application/json',
    },
    data:{
      cardVO:card,
      userId:userId,
    }
  })
  return response.data;
}

export const todoNoti = async (todo, userId) => {
  const response = await axios({
    url:"/noti/todoNoti",
    method:"post",
    headers:{
      "Authorization":sessionStorage.getItem("accessToken"),
      'content-type' : 'application/json',
    },
    data:{
      todoVO:todo,
      userId:userId,
    }
  })
  return response.data;
}