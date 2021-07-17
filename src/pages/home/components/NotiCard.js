import React, { useCallback } from 'react';
import { Alert, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { changeNotiCheck, deleteNoti } from '../../../modules/notification';

const NotiCard = ({ noti }) => {
  const dispatch = useDispatch();
  const onRemove = useCallback(
    noti_id=>dispatch(deleteNoti(noti_id)),
    []
  )
  const onToggle = useCallback(
    noti_id=>dispatch(changeNotiCheck(noti_id)),
    []
  )
  const returnTypeColor = (type) => {
    switch (type) {
      case 'c':
        return 'primary'; //card
      case 'b':
        return 'danger'; //board
      case 'i':
        return 'success'; //invite
      default:
        return 'secondary'; //todo
    }
  };
  return (
    <Alert variant={returnTypeColor(noti.NOTI_TYPE)}>
      <div style={{display:"flex"}}>
        <div>
          <Alert.Link as={Link} to={`/workspace/${noti.WS_ID}`} style={{ textDecoration: 'none' }}>
            <h4 style={{ marginBottom: 20 }}>{noti.WS_NAME}</h4>
          </Alert.Link>
        </div> 

        <div style={{marginLeft:90}}>
          <Button variant="danger" onClick={e=>{
            console.log(noti.NOTI_ID);
            onRemove(noti);
          }}>삭제</Button>
          <Button onClick={e=>onToggle(noti)} style={{marginLeft:6}}>읽음 않읽음 토글</Button>
        </div>
      </div>
      <Card>
        <Card.Header>
          {noti.WS_NAME}
        </Card.Header>
        <Card.Body><pre>{noti.NOTI_DESC}</pre></Card.Body>
        <Card.Footer>{noti.NOTI_TIME}</Card.Footer>
      </Card>
    </Alert>
  );
};

export default NotiCard;