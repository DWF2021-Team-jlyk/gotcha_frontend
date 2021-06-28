import {
  Button,
  Col,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
  Row,
} from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';
import React, { useEffect, useState } from 'react';
import AdminUserAvatar from './AdminUserAvatar';

const LeaveModal = ({ leaveModal, leaveModalClose, userList }) => {
  return (
    <Modal
      show={leaveModal}
      onHide={leaveModalClose}
      style={{ marginTop: '120px' }}
    >
      <Modal.Header style={{backgroundColor:"#F7F7F7"}}>
        <Modal.Title>Admin은 그냥 갈 수 없다..</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>Member 선택</div>
        <Row lg={2} style={{ marginTop: 20 }}>
            {userList.map((value, index) => {
                return <AdminUserAvatar user_id={value} key={index} />;
            })}
    
        </Row>
      </Modal.Body>
      <Modal.Footer>

        <Button variant="danger" onClick={leaveModalClose} disabled>
          leave Workspace
        </Button>
        <Button variant="secondary" onClick={leaveModalClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LeaveModal;
