import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
} from 'react-bootstrap';

import { FunctionalAddOn, ActionAddOn } from './ModalAddOn';

import CardMember from '../CardModal/CardMember';
import CardAct from '../CardModal/CardAct';
import CardDesc from '../CardModal/CardDesc';
import CardTodo from '../CardModal/CardTodo';
import CardModalHeader from '../CardModal/CardModalHeader';
import { useSelector, useDispatch } from 'react-redux';
import { postCardMember } from '../../../../modules/cardMember';
import Form from 'react-bootstrap/Form'

const WorkListCardModal = (props) => {
  
  return (
    <Modal
      size={'lg'}
      show={props.show}
      onHide={props.handle}
      style={{ marginTop: '100px' }}
    >
     
      <CardModalHeader card={props.card}></CardModalHeader>

      <ModalBody>
    
        <Row>
          <Col sm={9}>
          {/* {props.card.card_id} */}
            <CardMember card={props.card}></CardMember>
            <CardDesc card={props.card}></CardDesc>
           {/*  <CardTodo ></CardTodo>  */}
            <CardAct card={props.card}></CardAct>  
          </Col>

          <Col sm={3}>
            <div>
              <h5 style={{marginBottom:20}}>Card Behavior</h5>

              <FunctionalAddOn card={props.card} ws_id={props.ws_id} />
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
