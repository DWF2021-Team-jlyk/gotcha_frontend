import React from 'react';
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
  const {cardId, card} = props
  console.log("ModalAddOn card:",card);
  return (
    <>
      <AddMember></AddMember>
      <AddDate card = {card}></AddDate>
      <AddTodo cardId = {cardId}></AddTodo>
      <AddFile></AddFile>
    </>
  );
};

export const ActionAddOn = () => {
  return (
    <>
      <CardMove></CardMove>
      <CardCopy></CardCopy>
    </>
  );
};
