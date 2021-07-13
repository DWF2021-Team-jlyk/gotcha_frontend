import React, { useCallback, useEffect } from 'react';
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
  console.log('FileCheckTrue file', file);

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
    },[dispatch]);

  const deleteCardFiles = useCallback(
    (file_id) =>
      dispatch(
        deleteCardFile({
          file_id: file_id,
        }),
      ),
    [dispatch],
  );

  const saveFiles = () =>{
    
  };

  return (
    <div style={{ display: 'flex' }}>
      <Form.Check
        type="checkbox"
        id="autoSizingCheck"
        className="mb-2"
        checked="checked"
        onClick={
          () => updateFileIschecked('0')
        }
      />
      <div style={{ marginLeft: 5, width: '100%', minWidth: 200 }}>
        {file.file_name}
      </div>
      {/* <button>download</button>  */}
      <button
              block
              variant="outline"
              color="dark"
              name={file.file_id}
              //key={key}
              onClick={(e) => {
                //if (!updateCheck) {
                  //console.log(item);
                  Helpers.httpRequest(
                    `http://192.168.20.200:3000${file.file_path}`,
                    "get"
                  )
                    .then((response) => response.blob())
                    .then((blob) => {
                      // create blob link
                      const url = window.URL.createObjectURL(
                        new Blob([blob])
                      );
                      const link = document.createElement("a");
                      link.href = url;
                      link.setAttribute(
                        "download",
                        `${file.file_name}`
                      );
            
                      // append to html
                      document.body.appendChild(link);
            
                      // download
                      link.click();
            
                      // remove
            
                      link.parentNode.removeChild(link);
                    })
                    // .catch((error) => {
                    //   error.json().then((json) => {});
                    // });
                  //}
              }
                }> download </button> &nbsp;
      <button
        onClick={() => {
          deleteCardFiles(file.file_id);
        }}
      >
        delete
      </button>
      {console.log('file.file_id', file.file_id)}
      {console.log('updateFileIschecked ...file',{...file})}
    </div>
  );
};

export default FileCheckTrue;
