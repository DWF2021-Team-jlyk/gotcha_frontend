import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
} from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';
import { FunctionalAddOn, ActionAddOn } from './ModalAddOn';
import { TiDocument } from 'react-icons/ti';
import { BsCheckBox } from 'react-icons/bs';
import {
  AiFillEdit,
  AiOutlineAlignLeft,
  AiOutlineClose,
  AiOutlineUser,
} from 'react-icons/ai';
import Form from 'react-bootstrap/Form';

const listButton = {
  backgroundColor: '#7986CB',
  border: '1px solid #7986CB',
  marginLeft: 10,
  fontSize: 13,
  height: 30,
};

const WorkListCardModal = (props) => {
  const [desc, setDesc] = useState(false);

  const [listDateShow, setListDateShow] = useState(false);

  const handleClose = () => setListDateShow(false);
  const handleShow = () => setListDateShow(true);

  const avatarIcon = (id) => {
    let returnStr = id.charAt(0);
    for (let i = 1; i < id.length; i++) {
      if (id.charAt(i) === '@') break;
      if (id.charAt(i) === id.charAt(i).toUpperCase())
        returnStr += id.charAt(i);
    }
    return returnStr;
  };

  return (
    <Modal
      size={'lg'}
      show={props.show}
      onHide={props.handle}
      style={{ marginTop: '100px' }}
    >
      <ModalHeader
        style={{
          background: '#3f51b5',
        }}
        closeButton
      >
        <h3 style={{ color: 'white' }}>
          <TiDocument /> cardname {props.cardName}{' '}
          <span style={{ fontSize: 15 }}>in list (listname)</span>
        </h3>
      </ModalHeader>

      <ModalBody>
        <Row>
          <Col sm={9}>
            <div>
              <h5>
                {' '}
                <AiOutlineUser /> Members{' '}
              </h5>
              멤버추가시 아바타 추가, 멤버 0명이면 div 안보이게
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </div>
            <h5 style={{ marginTop: 30, marginBottom: 20 }}>
              <AiFillEdit /> Description{' '}
            </h5>

            {desc === false ? (
              // Description값 보여주기
              <div
                onClick={(e) => {
                  setDesc(!desc);
                }}
              >
                <Form.Control
                  as="textarea"
                  placeholder="Add a more detailed desciption..."
                  style={{ height: '100px', resize: 'none' }}
                  disabled
                />
              </div>
            ) : (
              // Description값 수정하기
              <div>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Add a more detailed desciption..."
                    style={{ height: '180px' }}
                  />
                  <div style={{ marginTop: 5, float: 'right' }}>
                    <Button
                      onClick={(e) => {
                        setDesc(!desc);
                      }}
                      style={{
                        backgroundColor: '#7986CB',
                        border: '1px solid #7986CB',
                      }}
                    >
                      Save
                    </Button>
                    <AiOutlineClose
                      style={{ marginLeft: 10, fontSize: 26 }}
                      onClick={(e) => {
                        setDesc(!desc);
                      }}
                    />
                  </div>
                </Form.Group>
              </div>
            )}

            {/* TodoList */}
            <div>
              <div style={{ marginTop: 30, marginBottom: 20 }}>
                <h5>
                  <BsCheckBox /> TodoList
                </h5>
              </div>

              {/* 입력된 todolist들 */}
              <div>
                <div style={{ display: 'flex' }}>
                  <div style={{ padding: 5 }}>
                    <Form.Check
                      type="checkbox"
                      id="autoSizingCheck"
                      className="mb-2"
                    />
                  </div>
                  <div style={{ padding: 5 }}>Todolist name</div>
                  <Button onClick={handleShow} style={listButton}>
                    기간 설정
                  </Button>
                </div>

                <Modal
                  show={listDateShow}
                  onHide={handleClose}
                  style={{ marginTop: '300px' }}
                >
                  <Modal.Header
                    closeButton
                    style={{
                      background: '#f7f7f7',
                    }}
                  >
                    <Modal.Title>Todolist 기간 설정</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Start date(누르면 달력나오게) <br></br>
                    End date
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>

            <div style={{ display: 'flex', marginTop: 60, marginBottom: 5 }}>
              <h5>
                <AiOutlineAlignLeft /> Activity{' '}
              </h5>

              <Button
                style={{
                  backgroundColor: '#7986CB',
                  border: '1px solid #7986CB',
                  marginLeft: 377,
                }}
              >
                Show Log
              </Button>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div style={{ display: 'flex' }}>
                <Avatar
                  onClick={(event) => {}}
                  style={{ margin: '10px 10px 0px 5px' }}
                >
                  {/* {avatarIcon(props.user_id)} */}
                  {avatarIcon('user01@naver.com')}
                </Avatar>

                <Form.Control type="text" placeholder="Write a comment..." />
              </div>
            </Form.Group>

            <div style={{ height: 200 }}>{/* activity 띄울곳 */}</div>
          </Col>

          <Col sm={3}>
            <div>
              <h5>ADD TO CARD</h5>
              <FunctionalAddOn />
            </div>
            <br />
            <div>
              <h5>ACTIONS</h5>
              <ActionAddOn />
            </div>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button variant="primary">Save</Button>
        <Button variant="danger">Delete</Button>
        <Button variant="secondary">Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default WorkListCardModal;
