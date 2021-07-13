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

export default function AddFile(props) {
  const {card, num, setNum} = props;
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    if(num != 4)
      setNum(4);
    else setNum(0);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick} style={buttonStyle}>
        <AiFillFileAdd /> &nbsp; File
      </Button>

      <Overlay
        show={num===4}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={40}
      >
        <Popover id="popover-contained" >
          <Popover.Title as="h3"> <b>File 첨부</b> </Popover.Title>

          <Popover.Content> 
          
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );
}
