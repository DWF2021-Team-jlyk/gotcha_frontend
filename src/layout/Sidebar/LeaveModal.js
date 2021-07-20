import {
  Button,
  Modal,
  Row,
  Col
} from 'react-bootstrap';
import React, { useState } from 'react';
import AdminUserAvatar from './AdminUserAvatar';
import axios from 'axios';
import apiAxios from '../../lib/apiAxios';
import { useDispatch } from 'react-redux';
import { postWorkspaces } from '../../modules/workspace';

function RoleModal({ role, leaveModal, leaveModalClose, userList, ws_id, user_id }) {
  console.log('length ',userList.length)
  console.log('role ',role)

  const [reason, setReason] = useState("");

  const dispatch = useDispatch();

  const leaveHandler = () => {
    apiAxios('/home/leaveWorkspace', {ws_id: ws_id, user_id: user_id, reason:reason}).then(
      leaveModalClose(),
      dispatch(postWorkspaces())
    );
  }

  const deleteWorkspace = () => {
    apiAxios('/home/deleteWorkspace', {ws_id: ws_id}).then(
      leaveModalClose(),
      dispatch(postWorkspaces())
    );

  }


  if (role === 'ADMIN' && userList.length > 1) {
    return (
      <Modal
        show={leaveModal}
        onHide={leaveModalClose}
        style={{ marginTop: '120px' }}
      >
        <Modal.Header style={{ backgroundColor: '#3f51b5', color: 'white' }}>
          <Modal.Title>Admin 양도</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>Member 선택</div>
          <Row style={{ marginTop: 20 }}>
            {userList.map((value, index) => {
              return value === user_id ? null :
               <Col><AdminUserAvatar user_id={value} key={index} ws_id={ws_id} /></Col> 
            })}

          </Row>
        </Modal.Body>
        <Modal.Footer>

          {/* <Button variant='danger' onClick={leaveModalClose} disabled>
            leave Workspace
          </Button> */}
          <Button variant='secondary' onClick={leaveModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else if (userList.length === 1)  {
    return (
      <Modal
        show={leaveModal}
        onHide={leaveModalClose}
        style={{ marginTop: '120px' }}
      >
        <Modal.Header style={{ backgroundColor: '#3f51b5', color: 'white' }}>
          <Modal.Title>Leave Workspace</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          workspace를 떠나십니까?
          사유를 작성해주세요.
          <input
            style={{marginTop:10,width:450}}
            onChange={e=>setReason(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={deleteWorkspace}>
            OK
          </Button>
          <Button variant='secondary' onClick={leaveModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else if(role !== 'ADMIN'){
    return (
      <Modal
        show={leaveModal}
        onHide={leaveModalClose}
        style={{ marginTop: '120px' }}
      >
        <Modal.Header style={{ backgroundColor: '#3f51b5', color: 'white' }}>
          <Modal.Title>Leave Workspace</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          workspace를 떠나십니까?
          사유를 작성해주세요.
          <input
            style={{marginTop:10, width:450}}
            onChange={e=>setReason(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={leaveHandler}>
            OK
          </Button>
          <Button variant='secondary' onClick={leaveModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const LeaveModal = ({ leaveModal, leaveModalClose, userList, role, ws_id, user_id }) => {

  return (
    <RoleModal
      role={role}
      leaveModal={leaveModal}
      leaveModalClose={leaveModalClose}
      userList={userList}
      user_id={user_id}
      ws_id={ws_id}
    />
  );
};

export default LeaveModal;