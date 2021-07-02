import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
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
  const [showLog, setShowLog] = useState(false);
  const [cardDTO, setCardDTO] = useState({});
  const [cardAct, setCardAct] = useState([]);
  const [cardFile, setCardFile] = useState({});
  const [cardMember, setCardmember] = useState([]);
  const [cardTodo, setCardTodo] = useState([]);

  const onClickShowLog = () => {
    setShowLog(!showLog);
  };

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    const result = await axios.post('/card/cardDetail', {
      card_id: props.card.CARD_ID,
    });

    console.log(result.data);
    setCardDTO(result.data.cardDTO);
    setCardAct(result.data.cardActs);
    setCardFile(result.data.cardFiles);
    setCardmember(result.data.cardMembers);
    setCardTodo(result.data.cardTodos);
  };

  
  const changeTodoIsDone = async (todo_id, isdone) => {
    const result = await axios.post('/card/todoIsDoneChange', {
      todo_id: todo_id,
      todo_isdone: isdone,
    });
  
  };

  console.log(cardTodo);
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
          <TiDocument /> {cardDTO.card_name}
        </h3>
      </ModalHeader>

      <ModalBody>
        <Row>
          <Col sm={9}>
            {/* ===================================Member================================= */}
            <div>
              <h5>
                {' '}
                <AiOutlineUser /> Members{' '}
              </h5>
              <div style={{ display: 'flex' }}>
                {cardMember.map((value, key) => {
                  return (
                    <Avatar
                      onClick={(event) => {}}
                      style={{ margin: '10px 10px 0px 5px' }}
                    >
                      {avatarIcon(value.user_id)}
                    </Avatar>
                  );
                })}
              </div>
            </div>

            {/* ===================================Description================================= */}
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
                  value={cardDTO.card_name}
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
                  <Form.Control as="textarea" style={{ height: '180px' }}>
                    {cardDTO.card_name}
                  </Form.Control>
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

            {/* ===================================TodoList================================= */}
            <div>
              <div style={{ marginTop: 30, marginBottom: 20 }}>
                <h5>
                  <BsCheckBox/> TodoList
                </h5>
              </div>

              {/* 입력된 todolist들 */}
              <div>
                {cardTodo.map((value, key) => {
                   console.log(value.todo_isdone )
                  return (
                    <div style={{ display: 'flex' }}>
                      <div style={{ padding: 5 }}>
                      {value.todo_isdone === 1?
                     
                        //1이면 check됨 
                        <div style={{display:"flex"}}>
                          <Form.Check
                            type="checkbox"
                            id="autoSizingCheck" 
                            className="mb-2"
                            checked="checked"
                            onClick={()=>changeTodoIsDone(value.todo_id,0)}
                          
                          />
                          <div style={{marginLeft:5}}><del>{value.todo_name}</del></div>
                        </div>
                        :
                        <div style={{display:"flex"}}>
                          <Form.Check
                            type="checkbox"
                            id="autoSizingCheck" 
                            className="mb-2"
                          
                            onClick={()=>changeTodoIsDone(value.todo_id,1)}
                      
                          />
                           <div style={{marginLeft:5}}>{value.todo_name}</div>
                        </div>
                      }
                      </div>
             
                      <Button onClick={handleShow} style={listButton}>
                        기간 설정
                      </Button>
                    </div>
                  );
                })}

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

            {/* ===================================Activity================================= */}
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
                onClick={onClickShowLog}
              >
                {showLog === true ? (
                  <span>Hide Log</span>
                ) : (
                  <span>Show Log</span>
                )}
              </Button>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div style={{ display: 'flex' }}>
                <Avatar
                  onClick={(event) => {}}
                  style={{ margin: '10px 10px 0px 5px' }}
                >
                  {avatarIcon('user01@naver.com')}
                </Avatar>
                <div style={{ display: 'flex', marginTop:10}}>
                  <Form.Control type="text" placeholder="Write a comment..." style={{width:445, marginRight:10, height:40}}/>
                  <Button style={{ backgroundColor: '#7986CB', border: '1px solid #7986CB', height:40}}>입력</Button>
                </div>
              </div>
            </Form.Group>

            <div style={{ height: 200 }}>
              {showLog === true ? (
                <>
                  {cardAct.map((value, key) => {
                    return (
                      <>
                        <div style={{ display: 'flex', marginBottom: 7 }}>
                          <div>
                            <Avatar
                              onClick={(event) => {}}
                              style={{ margin: '10px 10px 0px 5px' }}
                            >
                              {avatarIcon(value.user_id)}
                            </Avatar>
                          </div>

                          <div>
                            <div style={{ marginTop: 7, fontSize: '.9rem' }}>
                              <b>{value.user_id}</b>{' '}
                              <span style={{ fontSize: '0.8rem' }}>
                                {value.created_date}
                              </span>
                            </div>
                            <div style={{ marginTop: 10, marginBottom: 10 }}>
                              <span
                                style={{
                                  border: '1px solid #ced4da',
                                  fontSize: '.95rem',
                                  padding: 5,
                                  borderRadius: 4,
                                }}
                              >
                                {value.act_desc}
                              </span>
                            </div>
                            <div style={{ marginTop: 3, fontSize: '.8rem' }}>
                              Edit Delete
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </>
              ) : (
                <>
                  {cardAct.map((value, key) => {
                    if (value.islog == 0) {
                      return (
                        <>
                          <div style={{ display: 'flex', marginBottom: 7 }}>
                            <div>
                              <Avatar
                                onClick={(event) => {}}
                                style={{ margin: '10px 10px 0px 5px' }}
                              >
                                {avatarIcon(value.user_id)}
                              </Avatar>
                            </div>

                            <div>
                              <div style={{ marginTop: 7, fontSize: '.9rem' }}>
                                <b>{value.user_id}</b>{' '}
                                <span style={{ fontSize: '0.8rem' }}>
                                  {value.created_date}
                                </span>
                              </div>
                              <div style={{ marginTop: 10, marginBottom: 10 }}>
                                <span
                                  style={{
                                    border: '1px solid #ced4da',
                                    fontSize: '.95rem',
                                    padding: 5,
                                    borderRadius: 4,
                                  }}
                                >
                                  {value.act_desc}
                                </span>
                              </div>
                              <div style={{ marginTop: 3, fontSize: '.8rem' }}>
                                Edit Delete
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    }
                  })}
                </>
              )}
            </div>
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
