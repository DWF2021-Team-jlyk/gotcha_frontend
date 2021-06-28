import React, { useCallback } from 'react';
import { Alert, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { changeNotiRead, deleteNoti } from '../../../modules/notification';

const NotiCard = ({ noti }) => {
  const dispatch = useDispatch();
  const onRemove = useCallback(
    noti_id=>dispatch(deleteNoti(noti_id)),
    [dispatch]
  )
  const onToggle = useCallback(
    noti_id=>dispatch(changeNotiRead(noti_id)),
    [dispatch]
  )
  const returnTypeColor = (type) => {
    switch (type) {
      case 'card':
        return 'primary'; //card
      case 'board':
        return 'danger'; //board
      case 'invite':
        return 'success'; //invite
      default:
        return 'secondary'; //todo
    }
  };
  return (
    <Alert variant={returnTypeColor(noti.type)}>
      <div style={{display:"flex"}}>
        <div>
          <Alert.Link as={Link} to={`/workspace/${noti.ws_id}`} style={{ textDecoration: 'none' }}>
            <h4 style={{ marginBottom: 20 }}>{noti.workspaceName}</h4>
          </Alert.Link>
        </div> 

        <div style={{marginLeft:90}}>
          <Button variant="danger" onClick={e=>onRemove(noti.noti_id)}>삭제</Button>
          <Button onClick={e=>onToggle(noti.noti_id)} style={{marginLeft:6}}>읽음 않읽음 토글</Button>
        </div>
      </div>
      <Card>
        <Card.Header>
          {noti.title}
        </Card.Header>
        <Card.Body>{noti.desc}</Card.Body>
        <Card.Footer>{noti.endDate}</Card.Footer>
      </Card>
    </Alert>
  );
};

export default NotiCard;