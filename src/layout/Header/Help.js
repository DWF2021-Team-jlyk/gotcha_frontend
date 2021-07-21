import React, { useState } from 'react';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import HelpCarousel from './HelpCarousel';
import { Button, Modal } from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Tooltip } from 'antd';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

const Help = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const classes = useStyles();

  return (
    <>
      <Tooltip title="Site help">
        <HelpOutlineIcon
          style={{ fontSize: '1.9rem', color: 'white', marginTop: 2 }}
          onClick={handleShow}
        />
      </Tooltip>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header style={{ backgroundColor: '#3f51b5', color: 'white' }}>
          <Modal.Title> 사이트 이용 방법</Modal.Title>
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
