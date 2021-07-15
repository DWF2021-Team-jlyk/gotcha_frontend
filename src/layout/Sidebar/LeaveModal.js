import {
  Button,
  Modal,
  Row,
} from 'react-bootstrap';
import React from 'react';
import AdminUserAvatar from './AdminUserAvatar';
import axios from 'axios';
import apiAxios from '../../lib/apiAxios';
import { useDispatch } from 'react-redux';
import { postWorkspaces } from '../../modules/workspace';

function RoleModal({ role, leaveModal, leaveModalClose, userList, ws_id, user_id }) {
  console.log('length ',userList.length)
  console.log('role ',role)

  const dispatch = useDispatch();
  
  const leaveHandler = () => {
    apiAxios('/home/leaveWorkspace', {ws_id: ws_id, user_id: user_id}).then(
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
        <Modal.Header style={{ backgroundColor: '#F7F7F7' }}>
          <Modal.Title>Admin 양도</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Member 선택</div>
          <Row lg={2} style={{ marginTop: 20 }}>
            {userList.map((value, index) => {
              return value === user_id ? null :
              <AdminUserAvatar user_id={value} key={index} ws_id={ws_id} />
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
        <Modal.Header style={{ backgroundColor: '#F7F7F7' }}>
          <Modal.Title>Leave Workspace</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          workspace가 삭제 됩니다. 정말 workspace를 떠나시겠습니까?
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
        <Modal.Header style={{ backgroundColor: '#F7F7F7' }}>
          <Modal.Title>Leave Workspace</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          정말 workspace를 떠나시겠습니까?
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
