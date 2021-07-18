import React, { useCallback, useEffect } from 'react';
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
import { disappearModal } from '../../../../modules/cardModal';
import { AiOutlineBars } from 'react-icons/ai';
import { cardDelete } from '../../../../modules/workspaceCard';
import { postCard } from '../../../../modules/workspaceCard';

const WorkListCardModal = (props) => {
  const { cardId, card_id, show, handle } = props;
  const card = useSelector((state) => state.cardModal.card);
  const modalshow = useSelector((state)=> state.cardModal.showModal);
  const { ws_id } = useParams();
  const dispatch = useDispatch();

  const deleteCard = (card_id) => {
    dispatch(cardDelete({ card_id: card_id }))
    dispatch(disappearModal())
  }

  useEffect(() => {
    dispatch(postCard(ws_id));
  }, [modalshow]);


  const unMountFunc = useCallback(() => {
    dispatch(unmountCardMember());
    dispatch(unmountCardAct());
    dispatch(unmountCardTodo());
    dispatch(unmountCardFile());
    dispatch(unmountCard());
  });

  useEffect(() => {
    dispatch(registerCard(card));
    return unMountFunc;
  }, [cardId]);

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
            <CardMember />
            <CardDesc card={card} />
            {card?.card_start_date !== null &&
            card?.card_start_date !== undefined &&
              card?.card_start_date !== "" &&
            <CardDate card={card} />}
            <CardFile cardId={card?.card_id} />
            <CardTodo cardId={card?.card_id} />
            <CardAct card={card} />
          </Col>
          <Col sm={3}>
            <div>
              <h5 style={{ marginBottom: 20 }}>
                <AiOutlineBars /> Behavior
              </h5>
              <FunctionalAddOn card={card} ws_id={ws_id} />
            </div>
          </Col>
        </Row>
      </ModalBody>

      <ModalFooter>
        <Button
          variant="danger"
          onClick={() => deleteCard(card.card_id)}
        >
          Card Delete
        </Button>
        <Button variant="secondary" onClick={() => dispatch(disappearModal())}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default WorkListCardModal;
