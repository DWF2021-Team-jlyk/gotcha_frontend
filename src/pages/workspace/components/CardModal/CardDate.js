import React, { useCallback } from 'react';
import { BsCheckBox } from 'react-icons/bs';
import { MdDateRange } from 'react-icons/all';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { Form } from 'react-bootstrap';
import { cardUpdate } from '../../../../modules/workspaceCard';
import { insertCardAct } from '../../../../modules/cardAct';
import { updateCard } from '../../../../modules/cardModal';

const CardDate = ({ card }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userInfo.userId);

  const updatecheck = useCallback(
    (done) => {
      dispatch(cardUpdate({ ...card, card_isdone: done }));
      dispatch(updateCard({ ...card, card_isdone: done }));
    },
    [dispatch],
  );

  //log
  const insertLog = (card_id, user_id, islog, act_desc) => {
    dispatch(
      insertCardAct({
        card_id: card_id,
        user_id: user_id,
        islog: islog,
        act_desc: act_desc,
      }),
    );
  };

  return (
    <div>
      <div style={{ marginTop: 30, marginBottom: 20, display: 'flex' }}>
        <div>
          <h5>
            {' '}
            <MdDateRange /> Date | is Done?
          </h5>
        </div>
        <div style={{ marginLeft: 10 }}>
          {card.card_isdone === '1' ? (
            <Form.Check
              type='checkbox'
              id='auto'
              className='mb-2'
              checked='checked'
              onClick={(e) => {
                updatecheck('0');
                const desc = userId + '(이)가 Date is done을 체크해제하였습니다.';
                insertLog(card.card_id, userId, '1', desc);
              }}
            />
          ) : (
            <Form.Check
              type='checkbox'
              id='autoSizingCheck'
              className='mb-2'
              onClick={(e) => {
                updatecheck('1');
                const desc = userId + '(이)가 Date is done을 체크하였습니다.';
                insertLog(card.card_id, userId, '1', desc);
                insertLog();
              }}
            />
          )}
        </div>
      </div>
      <span>시작 날짜 : </span>
      {
        card?.card_start_date !== null &&
        card?.card_start_date !== "" &&
        <DatePicker
          selected={new Date(card?.card_start_date)}
          dateFormat='yyyy/MM/dd hh:mm aa'
          disabled
        />}
      <br />
      <span>종료 날짜 : </span>
      {
        card?.card_end_date !== null &&
        card?.card_end_date !== "" &&
        <DatePicker
          selected={new Date(card?.card_end_date)}
          dateFormat='yyyy/MM/dd hh:mm aa'
          disabled
        />}
    </div>
  );
};

export default CardDate;
