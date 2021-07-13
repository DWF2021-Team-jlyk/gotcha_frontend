import apiAxios, { fileAxios } from './apiAxios';

export const postFile = (card_id) =>
  apiAxios('/cardDetail/file', {
    card_id: card_id,
  });

export const addFile = (data) => 
fileAxios('/cardDetail/file/upload', data);

export const updateFile = (data) =>
  apiAxios('/cardDetail/file/update', 
    data);

export const deleteFile = ({ file_id }) =>
  apiAxios('/cardDetail/file/delete', {
    file_id: file_id,
  });
