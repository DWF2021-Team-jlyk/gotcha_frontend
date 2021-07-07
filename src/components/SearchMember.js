import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Col, Form, ListGroup, Overlay, Popover, Row } from 'react-bootstrap';
import axios from 'axios';

const SearchMember = ({ emailList, setEmailList }) => {
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

  useEffect(() => {
    axios({
      method: 'post',
      headers: { 'content-type': 'application/json' },
      url: '/home/getAllUsers',
    }).then(res => {
      setAllUsers([...res.data]);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <Form.Group>
      <Form.Label>WorkSpaceMember</Form.Label>
      <Row>
        <Col sm={8}>
          <div ref={ref}>
            <Form.Control
              type='email'
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={onChange}
              ref={emailEl}
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
                    <ListGroup style={{ overflowY: 'scroll', maxHeight: 300, width:500 }}>
                      {allUsers
                        .filter(email => email.indexOf(userEmail) >= 0)
                        .filter(email => emailList.findIndex(e=>email===e)===-1)
                        .map(email => (
                          <ListGroup.Item
                            key={email}
                            onClick={e=>onClick(email)}>{email}
                          </ListGroup.Item>
                        ))}
                    </ListGroup>
                  </Popover.Content>
                </Popover>
              )}
            </Overlay>
          </div>
        </Col>
        <Col sm={4}>
          <Button
            onClick={e => {
              setEmailList(emailList.concat(userEmail));
              emailEl.current.value = '';
              setUserEmail('');
            }}
            disabled
          >멤버 초대하기</Button>
        </Col>
      </Row>
    </Form.Group>
  );
};

export default SearchMember;