import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
} from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';
import { FunctionalAddOn, ActionAddOn } from './ModalAddOn';
import { TiDocument } from 'react-icons/ti';
import axios from 'axios';
import CardMember from '../CardModal/CardMember';
import CardAct from '../CardModal/CardAct';
import CardDesc from '../CardModal/CardDesc';
import CardTodo from '../CardModal/CardTodo.js';
import CardModalHeader from '../CardModal/CardModalHeader';
import { useSelector, useDispatch } from 'react-redux';
import {postCardMember} from '../../../../modules/cardMember'
import { postCardTodo } from '../../../../modules/cardTodo';
import { cardDelete } from '../../../../modules/workspaceCard';


const WorkListCardModal = (props) => {

 const {cardId, card} = props
  console.log("WorkListCardModal card:",card);
  const cardMembers = useSelector((state) => state.cardMember.members);
  const cardTodos = useSelector((state)=> state.cardTodo.todos);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(
      postCardMember(cardId));
    dispatch(
      postCardTodo(cardId)
    );
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
            <CardDesc></CardDesc>
            <CardTodo 
            cardTodo = {cardTodos}
            cardId = {cardId}></CardTodo>
            {/* <CardAct></CardAct>   */}
          </Col>

          <Col sm={3}>
            <div>
              <h5>ADD TO CARD</h5>
              <FunctionalAddOn 
              cardId = {cardId}
              card={card} />
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
