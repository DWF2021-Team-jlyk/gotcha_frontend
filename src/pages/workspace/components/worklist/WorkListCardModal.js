import React, { useCallback, useEffect } from 'react';
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
import { registerCard, unmountCard } from '../../../../modules/cardModal';
import { useParams } from 'react-router-dom';
import { unmountCardTodo } from '../../../../modules/cardTodo';
import { unmountCardAct } from '../../../../modules/cardAct';
import { unmountCardMember } from '../../../../modules/cardMember';
import { unmountCardFile } from '../../../../modules/cardFile';

const WorkListCardModal = (props) => {
  const { cardId, card_id, show, handle } = props;
  const card = useSelector(state => state.cardModal.card);
  const {ws_id} = useParams();
  const dispatch = useDispatch();
  const unMountFunc = useCallback(()=>{
    dispatch(unmountCardMember());
    dispatch(unmountCardAct());
    dispatch(unmountCardTodo());
    dispatch(unmountCardFile());
    dispatch(unmountCard());
  })
  useEffect(()=>{
    dispatch(registerCard(card));
    return unMountFunc;
  },[cardId]);
  return (
    <Modal
      size={'lg'}
      show={show}
      onHide={handle}
      // scrollable
    >
      <CardModalHeader card={card} />
      <ModalBody>
        <Row>
          <Col sm={9}>
            <CardMember/>
            <CardDesc card={card} />
            {card?.card_start_date !== null && <CardDate card={card} />}
            <CardFile cardId={card?.card_id} />
            <CardTodo cardId={card?.card_id} />
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
