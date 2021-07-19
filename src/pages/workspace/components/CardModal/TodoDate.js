import React from 'react';
import DatePicker from 'react-datepicker';

const TodoDate = ({startDate, endDate}) =>{
  console.log(startDate);
  console.log(endDate);

  const strCut = (date) => {
    const dateStr = date.substring(0,10)
    return dateStr;
  }
  return (
    <>
    <div style={{marginLeft:10, marginTop:2}}>
      {strCut(startDate)}~{strCut(endDate)}
    </div>
    </>
  )
}

export default TodoDate;