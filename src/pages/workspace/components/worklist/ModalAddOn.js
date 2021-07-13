import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AddMember from '../AddToCard/Member'
import AddDate from '../AddToCard/Date'
import AddTodo from '../AddToCard/Todo'
import AddFile from '../AddToCard/File'
import CardMove from '../Actions/Move'
import CardCopy from '../Actions/Copy'


export const FunctionalAddOn = ({ws_id, card}) => {
  return (
    <>
      <AddMember cardId ={card.card_id} ws_id={ws_id}></AddMember>
      <AddDate></AddDate>
      <AddTodo></AddTodo>
      <AddFile></AddFile>
      <CardMove card = {card} ws_id={ws_id}> </CardMove>
    </>
  );
};
