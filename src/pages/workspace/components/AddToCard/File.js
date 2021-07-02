import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import Popover from 'react-bootstrap/Popover'
import Overlay from 'react-bootstrap/Overlay';
import { AiFillFileAdd } from 'react-icons/ai';

const buttonStyle = {
  width:120, 
  backgroundColor:'#3f51b5', 
  color:'white', 
  marginBottom:8
}

export default function AddFile() {
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
        <AiFillFileAdd /> &nbsp; File
      </Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={40}
      
      >
        <Popover id="popover-contained">
          <Popover.Title as="h3"> <b>File 첨부</b> </Popover.Title>

          <Popover.Content> 
          
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );
}
