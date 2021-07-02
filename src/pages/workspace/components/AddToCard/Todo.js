import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
import { BsListCheck } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';


const buttonStyle = {
  width:120, 
  backgroundColor:'#3f51b5', 
  color:'white', 
  marginBottom:8
}


export default function AddTodo() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);           
  };

  return (
    <div ref={ref}>
      <Button
        onClick={handleClick}
        style={buttonStyle}
      >
        <BsListCheck /> &nbsp; Todo
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
            <b>Todo</b>
          </Popover.Title>

          <Popover.Content>   

            <Form.Group controlId="formBasicEmail">
                <Form.Label>추가할 Todo Name</Form.Label>
                <Form.Control type="text" placeholder="Todo Name" />
            </Form.Group>

            <Button style={{ backgroundColor: '#7986CB', border:'1px solid #7986CB', color:'white', marginTop:10}}>Add</Button>

          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );
}
