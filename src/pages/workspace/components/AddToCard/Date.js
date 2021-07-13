import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
import { AiOutlineCalendar } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import { cardUpdate } from '../../../../modules/workspaceCard';

const buttonStyle = {
  width: 120,
  backgroundColor: '#3f51b5',
  color: 'white',
  marginBottom: 8,
};

export default function AddDate(props) {
  const { card, num, setNum } = props;
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const defaultStartDate = card.card_start_date !== null ? new Date(card.card_start_date):new Date();
  const defaultEndDate = card.card_end_date !== null ? new Date(card.card_end_date):new Date();
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);

  const dispatch = useDispatch();
  const ref = useRef(null);

  const handleClick = (event) => {
    if(num != 2)
      setNum(2);
    else setNum(0);
    setTarget(event.target);
  };

  // const handleModalOff = (e) =>{
  //   const clicked = e.target.closest()
  // }

  const onUpdateDate = useCallback(
    (startDate, endDate) => {
      dispatch(
        cardUpdate({
          ...card,
          card_start_date: startDate,
          card_end_date: endDate,
        }),
      );
    },
    [dispatch],
  );

  console.log('Date ...card', { ...card });

  return (
    <div ref={ref}>
      <Button onClick={handleClick} style={buttonStyle}>
        <AiOutlineCalendar /> &nbsp; Date
      </Button>

      <Overlay
        show={num===2}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={40}
      >
        <Popover id="popover-contained">
          <Popover.Title as="h3">
            {' '}
            <b>Date</b>{' '}
          </Popover.Title>

          <Popover.Content>
            <div>
              Start date:
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              <br></br>
              End date:
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
              <Button
                size="small"
                onClick={() => {
                  onUpdateDate(startDate, endDate);
                }}
              >
                save
              </Button>
            </div>
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );
}
