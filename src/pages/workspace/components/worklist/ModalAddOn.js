import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AddMember from '../AddToCard/Member'
import AddDate from '../AddToCard/Date'
import AddTodo from '../AddToCard/Todo'
import AddFile from '../AddToCard/File'
import CardMove from '../Actions/Move'
import CardCopy from '../Actions/Copy'

const buttonStyle = {
  width: '150px',
  marginTop: '5px'
}

export const FunctionalAddOn = (props) => {
  const {cardId, card, num, setNum} = props
  // const [num, setNum] = useState(0);
  console.log("ModalAddOn card:",card);
  return (
    <>
      <AddMember card={card} num={num} setNum={setNum}/>
      <AddDate card={card} num={num} setNum={setNum}/>
      <AddTodo cardId={cardId} num={num} setNum={setNum}/>
      <AddFile card={card} num={num} setNum={setNum}/>
    </>
  );
};

export const ActionAddOn = (props) => {
  const {num, setNum} = props;
  return (
    <>
      <CardMove num={num} setNum={setNum}/>
      <CardCopy num={num} setNum={setNum}/>
    </>
  );
};
