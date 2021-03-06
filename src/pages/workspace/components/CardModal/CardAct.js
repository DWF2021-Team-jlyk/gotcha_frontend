import React, { useRef, useEffect, useState, useCallback } from 'react';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { Avatar } from '@material-ui/core';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ActArea from './ActArea';
import { postCardAct, insertCardAct } from '../../../../modules/cardAct';
import AvatarIcon from '../../../../Functions/AvatarIcon';

const CardAct = ({ card }) => {
  const [showLog, setShowLog] = useState(false);
  const [actDesc, setActDesc] = useState("");
  const [isActive, setIsActive] = useState(true);
  const actInputEL = useRef(null);

  const userName = useSelector(state=>state.userInfo.userName);
  const userId = useSelector(state=>state.userInfo.userId);

  //cardAct 받아옴
  const cardAct = useSelector((state) => state.cardAct.acts);
  const dispatch = useDispatch();

  //cardAct 추가
  const insertAct = useCallback((card_id, user_id, islog, act_desc) =>{
    dispatch(
      insertCardAct({ card_id: card_id, user_id: user_id, islog: islog, act_desc: act_desc}))
  },[cardAct]);

  //show log
  const onClickShowLog = useCallback((e) => {
    setShowLog(!showLog);
  },[showLog]);

  //댓글 입력창 set
  const actDescInput =useCallback((e) => {
    setActDesc(e.target.value);
  },[actDesc]);

  //cardAct 구분
  const result = cardAct.filter((act) => act.islog === "0");

  const buttonClick = useCallback((cardId, uid, desc)=>{
    insertAct(cardId, uid, '0', desc);
    actInputEL.current.value = '';
    setActDesc('');
  },[]);

  useEffect(() => {
    dispatch(postCardAct(card?.card_id));
  },[card]);

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
          {showLog === true ? "Hide Log" : "Show Log"}
        </Button>
      </div>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <div style={{ display: 'flex' }}>
          <Avatar
            style={{ margin: '10px 10px 0px 5px' }}
            defaultValue={AvatarIcon(userId)}
          />
          
          <div style={{ display: 'flex', marginTop: 10 }}>
            <Form.Control
              type="text"
              placeholder="Write a comment..."
              style={{ width: 445, marginRight: 10, height: 40 }}
              defaultValue={actDesc}
              onChange={actDescInput}
              ref={actInputEL}
            />
            <Button
              style={{
                backgroundColor: '#7986CB',
                border: '1px solid #7986CB',
                height: 40,
              }}
              onClick={() => buttonClick(card?.card_id, userId, actDesc)}

              disabled={actDesc.length > 0 ? false : true}
            >
              입력 
            </Button>
          </div>
        </div>
      </Form.Group>

      <div style={{maxHeight:500, overflowY:'scroll'}}>
        {showLog === true ? (
          <ActArea cardId={card?.card_id} cardAct={cardAct}/>
        ) : (
          <ActArea cardId={card?.card_id} cardAct={result}/>
        )}
      </div>
    </>
  );
};

export default CardAct;
