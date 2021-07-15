import React, { useCallback, useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  updateCardFile,
  deleteCardFile,
  postCardFile,
} from '../../../../modules/cardFile';
import Helpers from './Helpers';

const FileCheckTrue = (props) => {
  const { file, cardId } = props;
  const [fileButtons, setFileButtons] = useState(false);

  const dispatch = useDispatch();

  // const postFile = useEffect(()=>{
  //   dispatch(postCardFile(cardId));
  // },[file.file_id]);

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

  return (
    <div style={{ display: 'flex' }}>
      <Form.Check
        type='checkbox'
        id='autoSizingCheck'
        className='mb-2'
        checked={fileButtons}
        onClick={() => {
          setFileButtons(!fileButtons);
        }}
      />
      <div style={{ marginLeft: 5, width: '100%', minWidth: 200 }}>
        {file.file_name}
      </div>
      {fileButtons &&
      <>
        <button
          block
          variant='outline'
          color='dark'
          name={file.file_id}
          //key={key}
          onClick={
            Helpers.httpRequest(
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
              })
          }
        >
          download
        </button>
        &nbsp;
        <button
          onClick={() => {
            deleteCardFiles(file.file_id);
          }}
        >
          delete
        </button>
      </>
      }
    </div>
  );
};

export default FileCheckTrue;
