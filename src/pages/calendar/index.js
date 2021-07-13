import React, { useEffect, useState } from 'react';
import events from './events';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarTestData from '../../DummyData/CalendarTestData';
import WorkListCardModal from '../workspace/components/worklist/WorkListCardModal';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';

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

  useEffect(() => {
    setEvents(
      cards
        .filter(card => listId.findIndex(list => list === card.list_id) !== -1)
        .map(card => {
          return {
            card_id: card.card_id,
            title: card.card_name,
            allDay: true,
            start: card.card_start_date,
            end: card.card_end_date,
          };
        }),
    );
  }, [cards, listId]);

  const [loadModal, setLoadModal] = useState(false);
  const [cardId, setCardId] = useState(0);
  return (
    <div style={{ height: 800 }}>
      <div>
        {lists.map(list => (
          <>
            <input
              type='checkBox'
              key={list.list_id}
              value={list.list_id}
              name={list.list_name}
              onClick={async e => {
                const index = await listId.findIndex(value => value === list.list_id);
                if (index === -1) {
                  setListId(listId.concat(list.list_id));
                } else {
                  setListId(listId.filter(value => value !== list.list_id));
                }
                console.log(listId);
                console.log(events);
              }}
            />
            &nbsp;{list.list_name} &nbsp;
          </>
        ))}
      </div>
      <BigCalendar
        events={events}
        step={60}
        views={BigCalendar.Views.values}
        defaultDate={new Date(Date.now())}
        selectable
        onSelectSlot={(slotInfo) => console.log(slotInfo)}
        onSelectEvent={(event, e) => {
          setLoadModal(!loadModal);
          setCardId(event.card_id);
        }}
      />
      {<WorkListCardModal show={loadModal} card_id={cardId} />}
    </div>
  );
};

export default MyCalendar;
