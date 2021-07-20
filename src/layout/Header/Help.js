import React, { useState } from 'react';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import HelpCarousel from './HelpCarousel';
import { Button, Modal } from 'react-bootstrap';


const Help = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <HelpOutlineIcon onClick={handleShow} />

      <Modal 
      show={show} 
      onHide={handleClose} 
      size='xl'>
        <Modal.Header closeButton>
          <Modal.Title>Site Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HelpCarousel />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Help;
