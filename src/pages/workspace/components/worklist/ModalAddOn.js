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
export const FunctionalAddOn = () => {
  return (
    <>
      <AddMember></AddMember>
      <AddDate></AddDate>
      <AddTodo></AddTodo>
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
