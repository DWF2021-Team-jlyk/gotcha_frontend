import React from 'react';
import { Button, Col, Modal, ModalBody, ModalFooter, Row } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';
import { FunctionalAddOn, ActionAddOn } from './ModalAddOn';

const WorkListCardModal = (props) => {
  return (
    <Modal
      size={'lg'}
      show={props.show}
      onHide={props.handle}
      style={{ marginTop: '100px' }}
    >
      <ModalHeader
        closeButton
        style={{
          background: '#aaaaaa',
        }}
      >
        <h2>{props.cardName}</h2>
      </ModalHeader>
      <ModalBody>
        <Row>
          <Col sm={9}>
            <h5>Description</h5>
            <div contentEditable>

            </div>
            <h5>Activity</h5>
          </Col>
          <Col sm={3}>
            <div>
              ADD TO CARD
              <FunctionalAddOn />
            </div>
            <br />
            <div>
              ACTIONS
              <ActionAddOn />
            </div>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button variant='primary'>Save</Button>
        <Button variant='danger'>Delete</Button>
        <Button variant='secondary'>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default WorkListCardModal;