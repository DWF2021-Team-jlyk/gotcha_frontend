import React, { useCallback, useEffect, useState } from 'react';
import { Form, FormGroup, FormLabel } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { fileAxios } from '../../../../lib/apiAxios';
import { useDispatch } from 'react-redux';
import { addCardFile } from '../../../../modules/cardFile';
import Helpers from './Helpers';
import { useSelector } from 'react-redux';
import { insertCardAct } from '../../../../modules/cardAct';

export default function CardFileForm(props) {
  const { show, target, handleClick, cardId } = props;

  const userId = useSelector((state) => state.userInfo.userId);

  const [file, setFile] = useState(null);
  const [fileprev, setFileprev] = useState();

  const dispatch = useDispatch();

  //log
  const insertLog = (card_id, user_id, islog, act_desc) => {
    dispatch(
      insertCardAct({
        card_id: card_id,
        user_id: user_id,
        islog: islog,
        act_desc: act_desc,
      }),
    );
  };

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

      const desc =
        userId +
        '(이)가 카드에 ' +
        e.target.files[0].name +
        '(을)를 추가했습니다.';
      insertLog(cardId, userId, '1', desc);
    }
  };

  const onFileClick = (e) => {
    const formData = new FormData();
    formData.append('card_id', cardId);
    formData.append('file', file);
    dispatch(addCardFile(formData));
  };


  return (
    <Form>
      <FormGroup>
        <Form.Control type="file" onChange={onFileChange} />
        {file === '' ? null : <div style={{marginTop:10}}><img src={fileprev} alt="img" height={'200px'} width={"100%"} /></div>}
      </FormGroup>

      <div style={{float:'right'}}>
        <Button
          style={{
            backgroundColor: '#7986CB',
            border: '1px solid #7986CB',
            color: 'white',
            marginBottom:10
          }}
          onClick={() => {
            onFileClick();
            handleClick();
          }}
        >
          save
        </Button>
      </div>
    </Form>
  );
}
