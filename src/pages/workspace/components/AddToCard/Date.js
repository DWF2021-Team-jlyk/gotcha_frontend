import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
import { AiOutlineCalendar } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import { cardUpdate } from '../../../../modules/workspaceCard';
import { updateCard } from '../../../../modules/cardModal';

const buttonStyle = {
  width: 120,
  backgroundColor: '#3f51b5',
  color: 'white',
  marginBottom: 8,
};

const setDefaultDate = () => {

};

export default function AddDate(props) {
  const { card, num, setNum } = props;
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const defaultStartDate = card?.card_start_date !== null ? new Date(card?.card_start_date) : new Date();
  const defaultEndDate = card?.card_end_date !== null ? new Date(card?.card_end_date) : new Date();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const dispatch = useDispatch();
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  // const handleModalOff = (e) =>{
  //   const clicked = e.target.closest()
  // }

  const onUpdateDate = useCallback(
    (startDate, endDate) => {
      dispatch(cardUpdate({ ...card, card_start_date: startDate, card_end_date: endDate }));
      dispatch(updateCard({...card, card_start_date:startDate, card_end_date:endDate}));
    }, [card],
  );

  console.log('Date ...card', { ...card });

  return (
    <div ref={ref}>
      <Button onClick={handleClick} style={buttonStyle}>
        <AiOutlineCalendar /> &nbsp; Date
      </Button>

      <Overlay
        show={show}
        target={target}
        placement='right'
        container={ref.current}
        containerPadding={40}
      >
        <Popover id='popover-contained'>
          <Popover.Title as='h3'>
            {' '}
            <b>Date</b>{' '}
          </Popover.Title>

          <Popover.Content>
            <div>
              <div>
            
                <span style={{fontWeight:500}}>Start date: </span> 
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
               
       
              </div>

              <div style={{margin:'10px 0 10px 0'}}>
          
                <span style={{fontWeight:500}}>End date: </span>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                />
           
              </div>

              <div style={{float:'right', marginBottom:10}}>
              <Button
                  style={{
                    backgroundColor: '#7986CB',
                    border: '1px solid #7986CB',
                    color:'white'
                  }}
                size='small'
                onClick={() => {
                  onUpdateDate(startDate.toISOString(), endDate.toISOString());
                }}
              >
                save
              </Button>
              </div>
            </div>
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );
}
