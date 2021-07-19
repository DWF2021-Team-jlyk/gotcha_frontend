import React from 'react';
import DatePicker from 'react-datepicker';

const TodoDate = ({startDate, endDate}) =>{
  console.log(startDate);
  console.log(endDate);
  return (
    <>
      <DatePicker
        selected={new Date(startDate)}
        dateFormat='yyyy/MM/dd'
        disabled
      />
      ~
      <DatePicker
        selected={new Date(endDate)}
        dateFormat='yyyy/MM/dd'
        disabled
      />
    </>
  )
}

export default TodoDate;