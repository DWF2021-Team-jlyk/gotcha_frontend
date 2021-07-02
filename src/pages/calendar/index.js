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

moment.locale('ko');
BigCalendar.momentLocalizer(moment);

// const allViews = Object
//   .keys(BigCalendar.Views)
//   .map(k => BigCalendar.Views[k]);

const MyCalendar = () => {
  const lists = useSelector(state => state.workspaceList.lists);
  const [listId, setListId] = useState(lists[0]?.list_id);
  let TestEvents =
    CalendarTestData
      .filter(card => card.list_id == listId)
      .map(card => {
        return {
          card_id: card.card_id,
          title: card.card_name,
          allDay: true,
          start: card.card_start_date,
          end: card.card_end_date,
        };
      });
  const [loadModal, setLoadModal] = useState(false);
  const [cardId, setCardId] = useState(0);
  return (
    <div style={{ height: 800 }}>
      <Select
        closeMenuOnSelect={false}
        isMulti
        components={makeAnimated()}

        options={lists.map(list => {
          return {
            value: list.list_id,
            label: list.list_name,
          };
        })}
      />
      <BigCalendar
        events={TestEvents}
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
