import React, { useCallback, useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  updateCardFile,
  deleteCardFile,
  postCardFile,
} from '../../../../modules/cardFile';
import Helpers from './Helpers';
import { AiOutlineDownload, BsCardImage } from 'react-icons/all';
import { AiOutlineDelete } from 'react-icons/ai';

const FileCheckTrue = (props) => {
  const { file, cardId } = props;
  const [fileButtons, setFileButtons] = useState(false);

  const dispatch = useDispatch();

  // const postFile = useEffect(()=>{
  //   dispatch(postCardFile(cardId));
  // },[file.file_id]);

  const isImage = useCallback((fileName) => {
    const index = fileName.lastIndexOf('.');
    const ext = fileName.substr(index+1).toLowerCase();
    console.log(index);
    switch(ext){
      case 'jpg':
      case 'png':
      case 'webp':
        return true;
      default:
        return false;
    }
  },[]);

  const updateFileIschecked = useCallback(
    (fileIsChecked) => {
      dispatch(
        updateCardFile({
          ...file,
          file_ischecked: fileIsChecked,
        }),
      );
    }, []);

  const deleteCardFiles = useCallback(
    (file_id) =>
      dispatch(
        deleteCardFile({
          file_id: file_id,
        }),
      ),
    [],
  );

  const downloadFile = useCallback((e) => {
    return Helpers.httpRequest(
      `http://localhost:3000${file.file_path}`,
      'get',
    )
      .then((response) => response.blob())
      .then((blob) => {
        // create blob link
        const url = window.URL.createObjectURL(
          new Blob([blob]),
        );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
          'download',
          `${file.file_name}`,
        );
        // append to html
        document.body.appendChild(link);
        // download
        link.click();
        // remove
        link.parentNode.removeChild(link);
      });
  }, []);

  const download = () => {
    fetch(`/cardDetail/file/download/${file.file_id}`,
      { headers: { 'Authorization': sessionStorage.getItem('accessToken') } },
    )
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = file.file_name;
        a.click();
      });
  };

  return (
    <div style={{ display: 'flex' }}>
      <Form.Check
        type='checkbox'
        id='autoSizingCheck'
        className='mb-2'
        defaultChecked={fileButtons}
        onClick={() => {
          setFileButtons(!fileButtons);
        }}
      />
      <div style={{ marginLeft: 5, width: '100%', minWidth: 100, height:35}}>
        {/* <div style={{ marginLeft: 5, width:'100px'}}> */}
        {file.file_name}&ensp;
      </div>

      {/* <button>download</button>  */}
      {fileButtons&&<>
        <Button
          style={{
            backgroundColor: '#7986CB',
            border: '1px solid #7986CB',
            color: 'white',
            height: 35,
          }}
          block
          variant='outline'
          name={file.file_id}
          //key={key}
          onClick={(e) => {
            download();
          }}
        >
          <AiOutlineDownload/>
        </Button>

        &nbsp;

        <Button
          variant='danger'
          style={{ height: 35 }}
          onClick={() => {
            deleteCardFiles(file.file_id);
          }}
        >
          <AiOutlineDelete/>
        </Button>

        &nbsp;

        {isImage(file.file_name)&&
          <Button
            variant="secondary"
            style={{height:35}}
            onClick={()=>{
            }}
          >
            <BsCardImage/>
          </Button>
        }

      </>
      }
    </div>
  );
};

export default FileCheckTrue;
