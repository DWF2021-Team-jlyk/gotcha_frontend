import React, { useEffect, useState } from 'react';
import { Avatar, Hidden } from '@material-ui/core';
import { Button, Col } from 'react-bootstrap';
import '../css/workspaceSettingModal.css';
import AvatarIcon from '../../Functions/AvatarIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import axios from 'axios';
import apiAxios from '../../lib/apiAxios';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { postNoti } from '../../modules/notification';

const onClick = (list, setList, userId) => {
  const changeList = list.filter((list) => list !== userId);
  setList(changeList);
};

const UserAvatar = (props) => {
  const [show, setShow] = useState(false);
  const [reason, setReason] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const { list, setList, user_id, admin, invite, ws_id, role, add} = props;
  const deleteMember = (user_id, reason) => {
    apiAxios('/home/deleteMember', {
      ws_id,
      user_id,
      reason,
    });
    dispatch(postNoti());
  };
  console.log('invite ', invite);

  useEffect(()=>{
    setReason("");
  },[]);

  return (
    <Col md={4} style={{ marginTop: 10 }}>
      <div className="avatorBorder">

        {role == 'ADMIN' ? (
          <>
            <div style={{ float: 'left' }}>
              <Avatar style={{ margin: '10px 10px 0px 5px', fontSize: '13px' }}>
                {AvatarIcon(user_id)}
              </Avatar>
            </div>
            <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {user_id}
              </div>

              <div style={{ marginTop: 5 }}>
                {invite ? (
                  user_id !== admin ? (
                    <Button
                      variant="danger"
                      style={{ fontSize: '.8rem' }}
                      onClick={handleShow}
                    >
                      내보내기
                    </Button>
                  ) : (
                    <Button
                      variant="danger"
                      style={{ fontSize: '.8rem' }}
                      disabled
                    >
                      내보내기(Admin)
                    </Button>
                  )
                ) : (
                  <Button
                    variant="primary"
                    style={{ fontSize: '.8rem' }}
                    onClick={(e) => {
                      setList(list.filter((list) => list !== user_id));
                    }}
                  >
                    초대 취소
                  </Button>
                )}
              </div>
            </div>
          </>
        ) : (

          <>
            <div style={{ float: 'left' }}>
              <Avatar style={{ margin: '0px 10px 0px 5px', fontSize: '13px' }}>
                {AvatarIcon(user_id)}
              </Avatar>
            </div>
            <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div
                style={{
                  marginTop: 7,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {user_id}
              </div>
            </div>
          </>

        )}

      </div>

      <Modal show={show} onHide={handleClose} style={{ marginTop: 200 }}>
        <Modal.Header style={{ backgroundColor: '#3f51b5', color: 'white' }}>
          <Modal.Title>내보내기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          사유 작성 :
          <input
            style={{marginLeft:10, width:380}}
            onChange={e=>{setReason(e.target.value)}}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={(e) => {
              setList(list.filter((list) => list !== user_id));
              deleteMember(user_id, reason);
              handleClose();
            }}
          >
            내보내기
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};

export default UserAvatar;