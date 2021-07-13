import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
import { AiFillFileAdd } from 'react-icons/ai';
import CardFileForm from '../CardModal/CardFileForm';
import { SettingsPhone } from '@material-ui/icons';

const buttonStyle = {
  width:120, 
  backgroundColor:'#3f51b5', 
  color:'white', 
  marginBottom:8
}

export default function AddFile(props) {
  const {cardId} = props;

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = () => {
    setShow(!show);
    //setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={(e)=>
        {handleClick();
        setTarget(e.target);
        }} style={buttonStyle}>
        <AiFillFileAdd /> &nbsp; File
      </Button>

      <Overlay
        show={num===4}
        target={target}
        placement="right"
        container={ref.current}
        containerPadding={40}
      >
        <Popover id="popover-contained" >
          <Popover.Title as="h3"> <b>File 첨부</b> </Popover.Title>

          <Popover.Content > 
            <CardFileForm
            show = {show}
            target = {target}
            handleClick={handleClick}
            cardId ={cardId}
            />
        </Popover.Content>
        </Popover>
      </Overlay>
    </div> 
  );
};
