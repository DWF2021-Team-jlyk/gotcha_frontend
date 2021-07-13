import React, { useCallback, useEffect, useState } from 'react';
import { Form, FormGroup, FormLabel } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { fileAxios } from '../../../../lib/apiAxios';
import { useDispatch } from 'react-redux';
import { addCardFile } from '../../../../modules/cardFile';
import Helpers from './Helpers';

export default function CardFileForm(props) {
  const { show, target, handleClick, cardId } = props;

  const [file, setFile] = useState(null);
  const [fileprev, setFileprev] = useState();

  const dispatch = useDispatch();

  const onFileChange = (e) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      const prev = reader.result;
      if (prev) {
        setFileprev(prev.toString());
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setFile(e.target.files[0]);
    }
  };

  const onFileClick = (e) => {
    const formData = new FormData();
    formData.append('card_id', cardId);
    formData.append('file', file);
    //formData.append('file_ischecked','0');

    //await fileAxios('/cardDetail/file/upload',file);
    // const url = '/cardDetail/file/upload';

    // const options = {
    //   method: 'POST',
    //   headers: {
    //    "Authorization": sessionStorage.getItem('accessToken'),
    //   },
    //   data:
    //     formData,
    //   url,
    // };

    // const response = await axios(options);
    // console.log(response);
    console.log('formData : ' + formData);
    dispatch(addCardFile(formData));
  };

   const saveFiles = ()=>{
     
   }

  // const addCardFiles = useCallback((card_id, file_name)=>{
  //   dispatch (addCardFile({
  //     card_id: card_id,
  //     file_name:file_name,
  //   }))
  // },[dispatch])

  return (
  
    <Form>
      <FormGroup>
        <FormLabel>업로드</FormLabel>
        <Form.Control type="file" onChange={onFileChange} />
        {file === '' ? null : <img src={fileprev} alt="img" height={'200px'} />}
      </FormGroup>
      
        <Button
          onClick={() => {
            onFileClick();
            handleClick();
          }}
        >
          save
        </Button>
        </Form>
        
                       
                          );
                        }
