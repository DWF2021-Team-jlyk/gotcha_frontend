import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Col, Form, ListGroup, Overlay, Popover, Row } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { postInviteMember } from '../modules/workspace';
import apiAxios from '../lib/apiAxios';

const SearchMember = ({member, ws_id, emailList, setEmailList, invite, click, setClick }) => {
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState('');
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const emailEl = useRef(null);
  const [allUsers, setAllUsers] = useState([]);

  const handleFocus = useCallback((e) => {
    setShow(true);
    setTarget(e.target);
  }, []);
  const handleBlur = useCallback((e) => {
    setShow(false);
  }, []);
  const onChange = useCallback(e => {
    setUserEmail(e.target.value);
  }, []);
  const onClick = useCallback((email) => {
    setEmailList(emailList.concat(email));
    setUserEmail('');
    emailEl.current.value = '';
  }, [emailList]);

  const inviteBtn = () => {
    // dispatch(postInviteMember(emailList));
    apiAxios('/home/inviteMember', {
      ws_id,
      emailList
    }).then(response=>{
      setEmailList([]);
      setClick(!click);
    });
  }

  useEffect(() => {
    axios({
      method: 'post',
      headers: {
        'content-type': 'application/json',
        "Authorization":sessionStorage.getItem("accessToken"),
      },
      url: '/home/getAllUsers',
      data: {
        ws_id,
        emailList: member
      }
    }).then(res => {
      setAllUsers([...res.data]);
    }).catch(error => {
      console.log(error);
    });
  }, [emailList]);

  return (
    <Form.Group>
      <Row>
        <Col sm={8}>
          <div ref={ref}>
            <Form.Control
              type='email'
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={onChange}
              ref={emailEl}
              placeholder='Select the member you want to invite'
            />
            <Overlay
              container={ref.current}
              target={target}
              show={show}
              placement='bottom'
            >
              {(props) => (
                <Popover id='popover-contained' {...props}>
                  <Popover.Content>
                    <ListGroup style={{ overflowY: 'scroll', maxHeight: 300,}}>
                      {member?
                        allUsers
                        .filter(email => email.indexOf(userEmail) >= 0)
                        .filter(email => emailList.findIndex(e=>email===e)===-1)
                        .filter(email=> member?.findIndex(e=>email === e)===-1)
                        .map(email => (
                          <ListGroup.Item
                            key={email}
                            onClick={e=>onClick(email)}>{email}
                          </ListGroup.Item>
                        )):
                        allUsers
                          .filter(email => email.indexOf(userEmail) >= 0)
                          .filter(email => emailList.findIndex(e=>email===e)===-1)
                          .map(email => (
                            <ListGroup.Item
                              key={email}
                              onClick={e=>onClick(email)}>{email}
                            </ListGroup.Item>
                          ))
                      }
                    </ListGroup>
                  </Popover.Content>
                </Popover>
              )}
            </Overlay>
          </div>
        </Col>
        {
          invite?
          <Col sm={4}>
            <Button
              onClick={inviteBtn}
              disabled={
                emailList.length === 0 ?
                true : false
              }>멤버 초대하기</Button>
          </Col>
          :
          null
        }
      </Row>
    </Form.Group>
  );
};

export default SearchMember;