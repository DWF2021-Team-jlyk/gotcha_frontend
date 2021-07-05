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
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { postCardMember } from '../../../../modules/cardMember';

const WorkListCardModal = (props) => {
  const {ws_id, cardId} = props;
  // const cardId = useSelector(state => state.cardId);
  const cardMembers = useSelector((state) => state.cardMember.members);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postCardMember(cardId));

  }, [cardId]);


  return (
    <Modal
      size={'lg'}
      show={props.show}
      onHide={props.handle}
      style={{ marginTop: '100px' }}
    >
     
      <CardModalHeader></CardModalHeader>

      <ModalBody>
        <Row>
          <Col sm={9}>
            <CardMember cardMember = {cardMembers}></CardMember>
            {/* <CardDesc ></CardDesc>
            <CardTodo></CardTodo>
            <CardAct ></CardAct>   */}
          </Col>

          <Col sm={3}>
            <div>
              <h5>ADD TO CARD</h5>
              <FunctionalAddOn cardId = {cardId} ws_id={ws_id} />
            </div>
            <br />
            <div>
              <h5>ACTIONS</h5>
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
