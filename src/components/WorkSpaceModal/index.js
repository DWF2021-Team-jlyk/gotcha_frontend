import React, { useRef } from 'react';
import { Button, Col, Form, Modal, ModalBody, ModalFooter, ModalTitle, Row } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';
import axios from 'axios';
import apiAxios from '../../lib/apiAxios';

const WorkSpaceMembers = async (data) => apiAxios('/home/wsUserList', data);

const WorkSpaceModal = (props) => {
  const { workspace } = props;
  const fileEl = useRef < HTMLImageElement > (null);
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
                <Form.Control
                  type='text'
                  defaultValue={workspace?.WS_NAME}
                  disabled={
                    workspace?.role !== 1
                  }
                />
              </Col>
            </Row>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>WorkSpace Thumbnail 사진</Form.Label>
            <Row>
              <Col sm={8}>
                <input type='image' />
              </Col>
            </Row>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>WorkSpace 멤버</Form.Label>
            <Row>
              <Col sm={8}>
                <Form.Control type='email' />
              </Col>
              <Col sm={4}>
                <Button>멤버 초대하기</Button>
              </Col>
            </Row>
          </Form.Group>


        </Form>
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

export default WorkSpaceModal;