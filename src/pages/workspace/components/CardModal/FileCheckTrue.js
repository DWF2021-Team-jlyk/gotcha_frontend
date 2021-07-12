import React, { useCallback, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateCardFile, deleteCardFile,postCardFile } from '../../../../modules/cardFile';

const FileCheckTrue = (props) =>{
    const {file, cardId} = props;
    console.log('FileCheckTrue file',file);

    const dispatch = useDispatch();

    // const postFile = useEffect(()=>{
    //   dispatch(postCardFile(cardId));
    // },[file.file_id]);

    const updateFileIschecked = useCallback((fileIsChecked)=>{
        dispatch(
            updateCardFile({
                ...file,
                file_ischecked:fileIsChecked,
            }),
        ); 
        console.log("FileCheckTrue ...file",{...file})
    },[dispatch]);

   

  //   const updateFileIschecked = useCallback((card_id, file_id, file_name, file_ischecked)=>{
  //     dispatch(
  //         updateCardFile({
  //             card_id:card_id,
  //             file_id:file_id,
  //             file_name:file_name,
  //             file_ischecked:file_ischecked,
  //         }),
  //     );
  // },[dispatch]);
    
    // const deleteCardFiles = useCallback(
    //     (file_id) => dispatch(deleteCardFile(file_id)),
    //     [dispatch],
    //   );

    const deleteCardFiles =(file_id) => {
      console.log(file_id)
      dispatch(deleteCardFile({file_id, test:1}));
    }

    return(
        <div style={{ display: 'flex' }}>
      <Form.Check
        type="checkbox"
        id="autoSizingCheck"
        className="mb-2"
        checked="checked"
        onClick={() =>  updateFileIschecked('0')
          //{updateFileIschecked(file.card_id,file.file_id,file.file_name,'0');}
        }
      />

      <div
        style={{ marginLeft: 5, width: '100%', minWidth: 200 }}
      >
       <a>{file.file_name}</a>
      </div>
      <button>download</button> &nbsp;
      <button onClick={()=>deleteCardFiles(file.file_id)}>delete</button>
      {console.log('file.file_id',file.file_id)}
      </div>
    );
}

export default FileCheckTrue;