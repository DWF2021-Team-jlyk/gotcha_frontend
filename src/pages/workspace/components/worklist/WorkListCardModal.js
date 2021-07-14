import React, { useEffect } from 'react';
import { Button, Col, Modal, ModalBody, ModalFooter, Row } from 'react-bootstrap';
import { FunctionalAddOn, ActionAddOn } from './ModalAddOn';
import CardMember from '../CardModal/CardMember';
import CardAct from '../CardModal/CardAct';
import CardDesc from '../CardModal/CardDesc';
import CardFile from '../CardModal/CardFile';
import CardTodo from '../CardModal/CardTodo.js';
import CardModalHeader from '../CardModal/CardModalHeader';
import CardDate from '../CardModal/CardDate';
import { useDispatch, useSelector } from 'react-redux';
import { registerCard } from '../../../../modules/cardForModal';

const WorkListCardModal = (props) => {
  const { cardId, ws_id, card_id, card } = props;
  // const card = useSelector(state => state.cardForModal.card);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(registerCard(card));
  },[cardId]);
  return (
    <Modal
      size={'lg'}
      show={props.show}
      onHide={props.handle}
      // scrollable
    >
      <CardModalHeader card={card} />
      <ModalBody>
        <Row>
          <Col sm={9}>
            <CardMember/>
            <CardDesc card={card} />
            {card?.card_start_date !== null && <CardDate card={card} />}
            <CardFile cardId={cardId} />
            <CardTodo cardId={cardId} />
            <CardAct card={card} />
          </Col>
          <Col sm={3}>
            <div>
              <h5 style={{ marginBottom: 20 }}>Card Behavior</h5>
              <FunctionalAddOn card={card} ws_id={ws_id} />
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
