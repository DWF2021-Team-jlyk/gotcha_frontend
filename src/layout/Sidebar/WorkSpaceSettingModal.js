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
import UserAvatar from './UserAvatar';
import axios from 'axios';
import AdminUserAvatar from './AdminUserAvatar';
import LeaveModal from './LeaveModal';

const WorkSpaceSettingModal = ({ workspace, clicked, handleClose, role }) => {

  const [userList, setUserLists] = useState([]);

  const [leaveModal, setLeaveModal] = useState(false);

  const leaveModalClose = () => setLeaveModal(false);
  const leaveModalShow = () => setLeaveModal(true);

  const url = '/home/wsUserList';
  const datas = workspace.ws_id;

  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    data: JSON.stringify(datas),
    url,
  };

  useEffect(() => {
    axios(options)
      .then((res) => {
        setUserLists([...res.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Modal
      size={'lg'}
      show={clicked}
      onHide={handleClose}
      style={{ marginTop: '100px' }}
    >
      <ModalHeader style={{backgroundColor:"#F7F7F7"}}>
        <ModalTitle>
          <span style={{ fontSize: '1.2rem' }}> {workspace.ws_name}</span>{' '}
          환경설정
        </ModalTitle>
      </ModalHeader>

      <ModalBody>
        <Form>
          <Form.Group>
            <Form.Label>WorkSpace Name</Form.Label>

            <Row>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  defaultValue={workspace.ws_name}
                  disabled={role !== 'ADMIN'}
                />
              </Col>

              <Col>
            
                <div>
                  {role === 'ADMIN' ?  <Button>변경하기</Button> : null}
                </div>
              </Col>
            </Row>
          </Form.Group>
          <br />

          {role === 'ADMIN' ? 
          <Form.Group>
            <Form.Label>WorkSpace Members</Form.Label>

            <Row>
              <Col sm={8}>
                <Form.Control type="email" disabled={role !== 'ADMIN'} />
              </Col>
              <Col sm={4}>
                <Button> add Member</Button>
              </Col>
            </Row>
          </Form.Group>
          :null}

        </Form>

        <Row style={{ marginTop: 20 }}>
          {userList.map((value, index) => {
            return <UserAvatar user_id={value} key={index}  role={role}/>;
          })}
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button variant="danger" onClick={leaveModalShow}>
          Leave Workspace
        </Button>

        <LeaveModal 
          leaveModal={leaveModal} 
          leaveModalClose={leaveModalClose} 
          userList={userList} 
          role={role}
        />

        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default WorkSpaceSettingModal;
