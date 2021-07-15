import {
  Button,
  Modal,
  Row,
} from 'react-bootstrap';
import React from 'react';
import AdminUserAvatar from './AdminUserAvatar';

function RoleModal({ role, leaveModal, leaveModalClose, userList }) {

  if (role === 'ADMIN') {
    return (
      <Modal
        show={leaveModal}
        onHide={leaveModalClose}
        style={{ marginTop: '120px' }}
      >
        <Modal.Header style={{ backgroundColor: '#F7F7F7' }}>
          <Modal.Title>Admin은 그냥 갈 수 없다..</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Member 선택</div>
          <Row lg={2} style={{ marginTop: 20 }}>
            {/* {userList.map((value, index) => {
              return <AdminUserAvatar user_id={value} key={index} />;
            })} */}

          </Row>
        </Modal.Body>
        <Modal.Footer>

          <Button variant='danger' onClick={leaveModalClose} disabled>
            leave Workspace
          </Button>
          <Button variant='secondary' onClick={leaveModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
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

          <Button variant='danger' onClick={leaveModalClose} disabled>
            leave Workspace
          </Button>
          <Button variant='secondary' onClick={leaveModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const LeaveModal = ({ leaveModal, leaveModalClose, userList, role }) => {

  return (
    <RoleModal
      role={role}
      leaveModal={leaveModal}
      leaveModalClose={leaveModalClose}
      userList={userList}
    />
  );
};

export default LeaveModal;
