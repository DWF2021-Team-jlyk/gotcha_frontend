import React, { useRef, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Form from 'react-bootstrap/Form';
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
import { FaUserFriends } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { postWorkspaceMember } from '../../../../modules/workspaceMember';
import { addCardMember } from '../../../../lib/cardActAPI';
import {
  insertCardMember,
  deleteCardMember,
} from '../../../../modules/cardMember';
import { AiOutlineCheck } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { insertCardAct } from '../../../../modules/cardAct';

const buttonStyle = {
  width: 120,
  backgroundColor: '#3f51b5',
  color: 'white',
  marginBottom: 8,
};

const memberButton = {
  marginBottom: 10,
  marginTop: 10,
  fontSize: '.7rem',
};

export default function AddMember(props) {
  const { num, setNum } = props;
  const card = useSelector((state) => state.cardModal.card);
  const userId = useSelector((state) => state.userInfo.userId);
  const wsMembers = useSelector((state) => state.workspaceMember.wsMembers);
  const cardMember = useSelector((state) => state.cardMember.members);

  const [click, setClick] = useState(false);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const { ws_id } = useParams();

  const dispatch = useDispatch();

  const onClick = useCallback((e) => {
    setClick(true);
  }, []);

  const handleClick = (e) => {
    setTarget(e.target);
    setShow(!show);
  };

  //log
  const insertLog = (card_id, user_id, islog, act_desc) => {
    dispatch(
      insertCardAct({
        card_id: card_id,
        user_id: user_id,
        islog: islog,
        act_desc: act_desc,
      }),
    );
  };

  useEffect(() => {
    dispatch(postWorkspaceMember(ws_id));
  }, [ws_id]);

  return (
    <div ref={ref}>
      <Button onClick={handleClick} style={buttonStyle}>
        <FaUserFriends /> &nbsp; Members
      </Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={40}
      >
        {(props) => (
          <Popover id="popover-contained" {...props}>
            <Popover.Title as="h3">
              {' '}
              <b>Members</b>{' '}
            </Popover.Title>

            <Popover.Content onClick={(e) => e.stopPropagation()}>
              <div>
                추가할 멤버 검색
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    size="sm"
                    style={{ marginTop: 10 }}
                    type="text"
                    placeholder="Search members"
                    onClick={onClick}
                  />
                </Form.Group>
                <hr />
                <div style={{ marginTop: 15 }}>
                  <b>Board Member List</b>

                  {wsMembers?.map((value, key) => {
                    if (cardMember?.map((mem) => mem.user_id).includes(value)) {
                      return (
                        <div>
                          <Button
                            style={memberButton}
                            variant="contained"
                            onClick={() => {
                              const desc =
                                userId +
                                '(이)가 ' +
                                value +
                                '(을)를 Card Member에서 제외했습니다.';

                              dispatch(
                                deleteCardMember({
                                  user_id: value,
                                  card_id: card?.card_id,
                                }),
                              );
                              insertLog(card?.card_id, userId, '1', desc);
                            }}
                          >
                            {value}
                          </Button>
                          <b>
                            <AiOutlineCheck
                              style={{ marginLeft: 10, fontSize: '1rem' }}
                            />
                          </b>
                        </div>
                      );
                    } else {
                      return (
                        <div>
                          <Button
                            style={memberButton}
                            variant="contained"
                            onClick={() => {
                              const desc =
                                userId +
                                '(이)가 ' +
                                value +
                                '(을)를 Card Member로 추가했습니다.';
                              dispatch(
                                insertCardMember({
                                  user_id: value,
                                  card_id: card?.card_id,
                                }),
                              );
                              insertLog(card?.card_id, userId, '1', desc);
                            }}
                          >
                            {value}
                          </Button>
                        </div>
                      );
                    }
                  })}
                  {/* {wsMembers?.filter(
                  value=>!cardMember?.map(mem=>mem.user_id).includes(value))
                  .map((value, key) => {
                  return (
                    <div>
                    <Button style={memberButton} variant="contained" onClick={insertMember}>
                      {value}
                    </Button>
                  </div>
                  )
                })} */}
                </div>
              </div>
            </Popover.Content>
          </Popover>
        )}
      </Overlay>
    </div>
  );
}
