import React, {useState } from 'react';
import { Form, FormGroup, FormLabel } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { fileAxios } from '../../../../lib/apiAxios';

export default function CardFileForm(props) {
  const{show, target, handleClick, cardId} = props

  const [file, setFile] = useState(null);
  const [fileprev, setFileprev] = useState();

  const onFileChange = (e) => {
    let reader = new FileReader();
    reader.onloadend = () =>{
      const prev = reader.result;
      if(prev){
        setFileprev(prev.toString());
      };
    };
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0]);
      setFile(e.target.files[0]);
    }
  };

  const onFileClick = async (e) => {
    const formData = new FormData();
    formData.append('card_id',cardId);
    formData.append('file', file);
    //formData.append('file_ischecked','0');

    // await fileAxios('/cardDetail/file/upload',file);
    const url = '/cardDetail/file/upload';

    const options = {
      method: 'POST',
      headers: {
       "Authorization": sessionStorage.getItem('accessToken'), 
      },
      data:
        formData,
      url,
    };

    await axios(options);
  };




  return (
            <Form>
              <FormGroup>
                <FormLabel>업로드</FormLabel>
                <Form.Control type="file" onChange={onFileChange} />
                {
                  file === ''? null : <img src={fileprev} alt='img' height={'200px'}/>
                }
                <Button onClick={()=>{
                  onFileClick();
                  handleClick();}
                  }>save</Button>
              </FormGroup>
            </Form>
  );
}
