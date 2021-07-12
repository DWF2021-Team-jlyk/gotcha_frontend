import apiAxios from './apiAxios';

export const postFile = (card_id) => 
  apiAxios('/cardDetail/file', {
    card_id:card_id
  });

// export const updateFile = (data) =>{
//   apiAxios('/cardDetail/file/update',{
//     data,
//   });
// };

export const updateFile = ({card_id,file_id,file_name,file_ischecked}) =>{
  apiAxios('/cardDetail/file/update',{
    card_id:card_id,
    file_id:file_id,
    file_name:file_name,
    file_ischecked,
  });
};


export const deleteFile = (file_id)=>{
  apiAxios('/cardDetail/file/delete',file_id)
}


