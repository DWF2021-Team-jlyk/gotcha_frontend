import React from 'react';
import { BsCheckBox } from 'react-icons/bs';
import { MdDateRange } from 'react-icons/all';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';

const CardDate = ({card}) => {
  return (
    <div>
      <div style={{ marginTop: 30, marginBottom: 20 }}>
        <h5>
          <MdDateRange/> Date
        </h5>
      </div>
      <span>시작 날짜 : </span>
      {card.card_start_date}
      <br/>
      <span>종료 날짜 : </span>
      {card.card_end_date}
    </div>
  )
}

export default CardDate;