import React, { useCallback, useEffect, useState } from 'react';
import events from './events';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarTestData from '../../DummyData/CalendarTestData';
import WorkListCardModal from '../workspace/components/worklist/WorkListCardModal';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import { disappearModal, registerCard } from '../../modules/cardModal';
import ListSelector from './ListSelector';
import EventProps from './EventProps';

moment.locale('ko');
BigCalendar.momentLocalizer(moment);

// const allViews = Object
//   .keys(BigCalendar.Views)
//   .map(k => BigCalendar.Views[k]);

const MyCalendar = () => {
  const lists = useSelector(state => state.workspaceList.lists);
  const cards = useSelector(state => state.workspaceCard.cards);
  const [listId, setListId] = useState([]);
  const [events, setEvents] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setEvents(
      cards
        .filter(card => listId.findIndex(list => list === card.list_id) !== -1)
        .map(card => {
          return {
            card_id: card.card_id,
            title: card.card_name,
            // allDay: false,
            start: new Date(card.card_start_date),
            end: new Date(card.card_end_date),
            card: card,
          };
        }),
    );
  }, [cards, listId]);

  const [loadModal, setLoadModal] = useState(false);
  const [cardId, setCardId] = useState(0);

  const handleModal = () => {
    setLoadModal(false);
    dispatch(disappearModal());
  };
  


  return (
    <>
      <div style={{ height: 800 }}>
        <ListSelector listId={listId} setListId={setListId} lists={lists} />
        <BigCalendar
          events={events}
          step={60}
          views={BigCalendar.Views.values}
          defaultDate={new Date()}
          selectable
          onSelectSlot={(slotInfo) => console.log(slotInfo)}
          onSelectEvent={(event, e) => {
            setLoadModal(true);
            setCardId(event.card_id);
            dispatch(registerCard(event.card));
          }}
          eventPropGetter={(EventProps)}
        />

      </div>
      {loadModal &&
      <WorkListCardModal
        show={loadModal}
        handle={handleModal}
      />
      }
    </>
  );
}
;

export default MyCalendar;
