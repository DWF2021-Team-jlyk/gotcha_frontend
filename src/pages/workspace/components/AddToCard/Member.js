import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Form from 'react-bootstrap/Form';
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
import { FaUserFriends } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { postWorkspaceMember } from '../../../../modules/workspaceMember';
import {addCardMember} from '../../../../lib/cardActAPI';
import {insertCardMember, deleteCardMember} from '../../../../modules/cardMember';
import {AiOutlineCheck} from "react-icons/ai";



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
  const { cardId, ws_id } = props;


  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
    console.log(ws_id);
  };

  const wsMembers = useSelector((state) => state.workspaceMember.wsMembers);
  const cardMember = useSelector((state) => state.cardMember.members);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postWorkspaceMember(ws_id));
  }, []);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  console.log(wsMembers);
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
        <Popover id="popover-contained">
          <Popover.Title as="h3">
            {' '}
            <b>Members</b>{' '}
          </Popover.Title>

          <Popover.Content>
            <div>
              추가할 멤버 검색
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  size="sm"
                  style={{ marginTop: 10 }}
                  size="small"
                  type="text"
                  placeholder="Search members"
                />
              </Form.Group>
              <hr></hr>
              <div style={{ marginTop: 15 }}>
                <b>Board Member List</b>

                {wsMembers?.map((value, key) => {
             
                  if (cardMember?.map((mem) => mem.user_id).includes(value)) {
                    return (
                      <div>
                        <Button
                          style={memberButton}
                          variant="contained"
                          onClick={()=>
                            dispatch(deleteCardMember({user_id:value, card_id:cardId}))
                          }
                        >
                          {value} 
                        </Button>
                        <b><AiOutlineCheck style={{marginLeft:10, fontSize:"1rem"}}/></b>
                      </div>
                    );
                  }
                  else {
                    return (
                      <div>
                        <Button
                          style={memberButton}
                          variant="contained"
                          onClick={()=>{
                            dispatch(insertCardMember({user_id:value, card_id:cardId}));
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
      </Overlay>
    </div>
  );
}
