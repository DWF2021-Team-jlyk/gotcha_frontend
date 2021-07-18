import React, { useCallback } from 'react';
import { Alert, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { changeNotiCheck, deleteNoti } from '../../../modules/notification';

const NotiCard = ({ noti }) => {
  const dispatch = useDispatch();
  const onRemove = useCallback(
    noti_id => dispatch(deleteNoti(noti_id)),
    [],
  );
  const onToggle = useCallback(
    noti_id => dispatch(changeNotiCheck(noti_id)),
    [],
  );
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
      <Alert.Link as={Link} to={`/workspace/${noti.WS_ID}`} style={{ textDecoration: 'none' }}>
        <h4 style={{ marginBottom: 20 }}>{noti.WS_NAME}</h4>
      </Alert.Link>
      {/*{noti.WS_NAME}*/}
      <pre style={{fontSize:15}}>
        {noti.NOTI_DESC}
      </pre>
      {/*<Card>*/}
      {/*  <Card.Header>*/}
      {/*  </Card.Header>*/}
      {/*  <Card.Body>*/}
      {/*  </Card.Body>*/}
      {/*  <Card.Footer>{noti.NOTI_TIME}</Card.Footer>*/}
      {/*</Card>*/}
      <hr />
      <div>
        알림 시간 : {noti.NOTI_TIME}
        <Button
          style={{ marginLeft: 5 }}
          variant='outline-danger'
          onClick={e => {
            console.log(noti.NOTI_ID);
            onRemove(noti);
          }}>삭제
        </Button>
        <Button
          onClick={e =>
            onToggle(noti)
          }
          variant='outline-primary'
          style={{ marginLeft: 5 }}
        >읽음 않읽음
        </Button>
      </div>
    </Alert>
  );
};

export default NotiCard;