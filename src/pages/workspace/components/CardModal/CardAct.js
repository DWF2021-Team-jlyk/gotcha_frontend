import React, { useRef, useEffect, useState, useCallback } from 'react';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { Avatar } from '@material-ui/core';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ActArea from './ActArea';
import { postCardAct, insertCardAct } from '../../../../modules/cardAct';

const avatarIcon = (id) => {
  let returnStr = id.charAt(0);
  for (let i = 1; i < id.length; i++) {
    if (id.charAt(i) === '@') break;
    if (id.charAt(i) === id.charAt(i).toUpperCase()) returnStr += id.charAt(i);
  }
  return returnStr;
};

const CardAct = ({ card }) => {
  const [showLog, setShowLog] = useState(false);
  const [actDesc, setActDesc] = useState('');
  const [isActive, setIsActive] = useState(true);

  //cardAct 받아옴
  const cardAct = useSelector((state) => state.cardAct.acts);
  const dispatch = useDispatch();

  //cardAct 추가
  const insertAct = (card_id, user_id, islog, act_desc) =>{
    dispatch(
      insertCardAct({
        card_id: card_id,
        user_id: user_id,
        islog: islog,
        act_desc: act_desc,
      })
    )
  };

  useEffect(() => {
    dispatch(postCardAct(card.card_id));
  },[]);

  //댓글 입력 버튼 막아둠 
  useEffect(() => {
    if (actDesc.length > 0) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }, [actDesc]);

  const actInputEL = useRef(null);

  //showloh
  const onClickShowLog = () => {
    setShowLog(!showLog);
  };

  //댓글 입력창 set
  const actDescInput = (e) => {
    setActDesc(e.target.value);
  };

  //cardAct 구분
  const result = cardAct.filter((act) => act.islog == 0);

  return (
    <>
      <div style={{ display: 'flex', marginTop: 60, marginBottom: 5 }}>
        <h5>
          <AiOutlineAlignLeft /> Activity{' '}
        </h5>

        <Button
          style={{
            backgroundColor: '#7986CB',
            border: '1px solid #7986CB',
            marginLeft: 377,
          }}
          onClick={onClickShowLog}
        >
          {showLog === true ? <span>Hide Log</span> : <span>Show Log</span>}
        </Button>
      </div>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <div style={{ display: 'flex' }}>
          <Avatar
            // onClick={(event) => {}}
            style={{ margin: '10px 10px 0px 5px' }}
          >
            {avatarIcon('user01@naver.com')}
          </Avatar>
          
          <div style={{ display: 'flex', marginTop: 10 }}>
            <Form.Control
              type="text"
              placeholder="Write a comment..."
              style={{ width: 445, marginRight: 10, height: 40 }}
              onChange={actDescInput}
              ref={actInputEL}
            />
            <Button
              style={{
                backgroundColor: '#7986CB',
                border: '1px solid #7986CB',
                height: 40,
              }}
              onClick={() => {
                insertAct(card.card_id, 'user01@naver.com', '0', actDesc);
                actInputEL.current.value = '';
                setActDesc('');
              }}

              disabled={isActive}
            >
              입력 
            </Button>
          </div>
        </div>
      </Form.Group>

      <div>
        {showLog === true ? (
          <ActArea cardId={card.card_id} cardAct={cardAct} />
        ) : (
          <ActArea cardId={card.card_id} cardAct={result}></ActArea>
        )}
      </div>
    </>
  );
};

export default CardAct;
