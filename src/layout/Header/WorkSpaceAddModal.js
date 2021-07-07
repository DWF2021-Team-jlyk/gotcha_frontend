import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  Col,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
  OverlayTrigger,
  PopoverContent,
  Row,
} from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';
import UserAvatar from '../Sidebar/UserAvatar';
import Popover from 'react-bootstrap/Popover';
import axios from 'axios';
import SearchMember from '../../components/SearchMember';

const EmailContent = async () => {
  const list = await axios({
    url: '/home/getAllUsers',
    method:'post',
    headers: { 'content-type': 'application/json' },
  });
  console.log(list)
  return (
    <Popover id="popover-contained">
      <PopoverContent>
        {list.data.map(email=><p key={email}>email</p>)}
      </PopoverContent>
    </Popover>
  );
};

const WorkSpaceAddModal = (props) => {
  const [userEmail, setUserEmail] = useState('');
  const [emailList, setEmailList] = useState([]);
  const emailEl = useRef(null);

  useEffect(() => {
    setUserEmail('');
    setEmailList([]);
  }, []);

  return (
    <Modal
      size={'lg'}
      show={props.clicked}
      onHide={props.handleClose}
      style={{ marginTop: '100px' }}
    >
      <ModalHeader closeButton>
        <ModalTitle>WorkSpace 추가하기</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form>
          <Form.Group>
            <Form.Label>WorkSpace Name</Form.Label>
            <Row>
              <Col sm={8}>
                <Form.Control type='text' />
              </Col>
            </Row>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>WorkSpace Thumbnail 사진</Form.Label>
            <Row>
              <Col sm={8}>
                <Form.Control type='file' />
              </Col>
              <Col sm={4}>
                <Button>사진 추가하기</Button>
              </Col>
            </Row>
          </Form.Group>
          <br />
          <SearchMember emailList={emailList} setEmailList={setEmailList}/>
        </Form>
        <Row>
          {emailList.map((email, index) => {
            return <UserAvatar user_id={email} key={index} />;
          })}
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button variant='danger' onClick={props.handleClose}>
          취소하기
        </Button>
        <Button variant='primary' onClick={props.handleClose}>
          추가하기
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default WorkSpaceAddModal;