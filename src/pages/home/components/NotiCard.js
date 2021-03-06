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

  const strCut = (date) => {
    const dateStr = date.substring(0, 10);
    return dateStr;
  };

  const returnTypeColor = (type) => {
    switch (type) {
      case 'c':
        return 'primary'; //card
      case 'b':
        return 'danger'; //board
      case 'i':
        return 'success'; //invite
      default:
        return 'secondary'; //todo, out
    }
  };
  const returnType = (type) => {
    switch (type) {
      case 'c':
        return '카드'; //card
      case 'b':
        return '보드'; //board
      case 'i':
        return '초대'; //invite
      case 'o':
        return '퇴장'
      default:
        return '할일'; //todo
    }
  };
  return (
    <Alert variant={returnTypeColor(noti.NOTI_TYPE)}>
      <Alert.Link
        as={Link}
        to={`/workspace/${noti.WS_ID}`}
        style={{ textDecoration: 'none' }}
      >
        <div style={{ display: 'flex' }}>
          <h4
            style={{ marginBottom: 20 }}
            onClick={e=>onToggle(noti)}
          >[{returnType(noti.NOTI_TYPE)}] {noti.WS_NAME}</h4>
        </div>
      </Alert.Link>
      <hr />
      <pre style={{ fontSize: 15, fontWeight:"bold"}}>
        {noti.NOTI_DESC}
      </pre>

      <hr />
      <div>
        알림 시간 : {noti.NOTI_TIME}

        <Button
          style={{ marginLeft: 60, backgroundColor: '#f47174', border: '1px solid #f47174' }}
          onClick={e => {
            onRemove(noti);
          }}

        >삭제

        </Button>
        <Button
          onClick={e =>
            onToggle(noti)
          }
          style={{ marginLeft: 5, backgroundColor: '#6797fa', border: '1px solid #6797fa' }}
        >{noti.NOTI_CHECKED === '1' ? '안 읽음' : '읽음'}
        </Button>
      </div>
    </Alert>
  );
};

export default NotiCard;