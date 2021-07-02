import React, { useRef, useState } from 'react';

import Button from '@material-ui/core/Button';
import Form from 'react-bootstrap/Form';
import Popover from 'react-bootstrap/Popover'
import Overlay from 'react-bootstrap/Overlay';
import { FaUserFriends } from 'react-icons/fa';

const buttonStyle = {
  width:120, 
  backgroundColor:'#3f51b5', 
  color:'white', 
  marginBottom:8
}


export default function AddMember(props) {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

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
          <Popover.Title as="h3"> <b>Members</b> </Popover.Title>

          <Popover.Content>
            <div>
              추가할 멤버 검색
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  size="sm"
                  style={{ marginTop: 10}}
                  size="small"
                  type="text"
                  placeholder="Search members"
                />
              </Form.Group>
              <hr></hr>
              <div style={{ marginTop: 15 }}>
                <b>Board Member List</b>

                <div>
                  <Button style={{ marginBottom:10, marginTop: 10, fontSize:".7rem"}} variant="contained">
                    김김김김김 (kim123@naver.com)
                    {/* 초대됐으면 색변경 or disabled */}
                  </Button>
                </div>

                <div>
                  <Button style={{ marginBottom:10, fontSize:".7rem"}} variant="contained">
                    김김이 (kim123@naver.com)
                  </Button> 
                </div>
                
                <div>
                  <Button style={{ marginBottom:10, fontSize:".7rem"}} variant="contained">
                    김김이 (kim123@naver.com)
                  </Button> 
                </div>
                
                <div>
                  <Button style={{ marginBottom:10, fontSize:".7rem"}} variant="contained">
                    김김이 (kim123@naver.com)
                  </Button> 
                </div>
                
                <div>
                  <Button style={{ marginBottom:10, fontSize:".7rem"}} variant="contained">
                    김김이 (kim123@naver.com)
                  </Button> 
                </div>

              </div>
            </div>
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );
}
