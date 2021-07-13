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
import CardTodo from '../CardModal/CardTodo.js';
import CardModalHeader from '../CardModal/CardModalHeader';
import { useSelector, useDispatch } from 'react-redux';
import { postCardMember } from '../../../../modules/cardMember';
import { postCardTodo } from '../../../../modules/cardTodo';
import { cardDelete } from '../../../../modules/workspaceCard';
import CardDate from '../CardModal/CardDate';

const WorkListCardModal = (props) => {
  const { cardId, card } = props;
  // console.log('WorkListCardModal card:', card);
  const cardMembers = useSelector((state) => state.cardMember.members);
  const cardTodos = useSelector((state) => state.cardTodo.todos);
  const [num, setNum] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("cardModal card Todo" + card);
    dispatch(postCardMember(cardId));
    dispatch(postCardTodo(cardId));
  }, [cardId]);

  return (
    <Modal
      size={'lg'}
      show={props.show}
      onHide={props.handle}
      style={{ marginTop: '100px' }}
    >
      <CardModalHeader/>

      <ModalBody>
        <Row>
          <Col sm={9}>
            <CardMember card={props.card}/>
            <CardDesc card={props.card}/>
            {card?.card_start_date !==null && <CardDate card={card}/>}
            <CardTodo cardTodo={cardTodos} cardId={cardId}/>
            <CardAct card={props.card}/>
          </Col>

          <Col sm={3}>
            <div>
              <h5>ADD TO CARD</h5>

              <FunctionalAddOn cardId={cardId} card={card} num={num} setNum={setNum}/>

              {/* <FunctionalAddOn card={props.card} ws_id={props.ws_id} /> */}
            </div>
            <br />
            <div>
              <h5>ACTIONS</h5>
              <ActionAddOn num={num} setNum={setNum}/>
            </div>
          </Col>
        </Row>
      </ModalBody>

      <ModalFooter>
        <Button variant="primary">Save</Button>
        <Button variant="danger">Delete</Button>
        <Button variant="secondary">Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default WorkListCardModal;
