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
import CardTodo from '../CardModal/CardTodo';
import CardModalHeader from '../CardModal/CardModalHeader';
import { useSelector, useDispatch } from 'react-redux';
import postCardMember from '../../../../modules/cardMember'


const WorkListCardModal = (props) => {

  const {card_id} = props;
  
  const cardMembers = useSelector((state) => state.cardMember.members);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(postCardMember(card_id));

  }, [card_id]);

  console.log(card_id);
  // const [cardDTO, setCardDTO] = useState({}); //gc_card 
  // const [cardAct, setCardAct] = useState([]);
  // const [cardFile, setCardFile] = useState({});
  // const [cardMember, setCardmember] = useState([]);
  // const [cardTodo, setCardTodo] = useState([]);


  // useEffect(() => {
  //   getDetail();
  // }, []);

  // const getDetail = async () => {
  //   const result = await axios.post('/card/cardDetail', {
  //     card_id: props.cardId
  //   });
  //   console.log(result.data);

  //   setCardDTO(result.data.cardDTO);
  //   setCardAct(result.data.cardActs);
  //   setCardFile(result.data.cardFiles);
  //   setCardmember(result.data.cardMembers);
  //   setCardTodo(result.data.cardTodos);
  // };

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
            <CardTodo ></CardTodo>
            <CardAct></CardAct>  
          </Col>

          <Col sm={3}>
            <div>
              <h5>ADD TO CARD</h5>
              <FunctionalAddOn />
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
