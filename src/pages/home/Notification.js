import React, { useState } from 'react';
import { Alert, Card } from 'react-bootstrap';
import './Cards.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useSelector } from 'react-redux';
import NotiCard from './components/NotiCard';

export default function Notification() {
  const notification = useSelector(state => state.notification);
  console.log(notification);

  return (
    <div>
      <Tabs defaultActiveKey='allNoti' transition={false} id='noanim-tab-example'>
        <Tab eventKey='allNoti' title='전체 알림'>
          <Card>
            <Card.Header style={{ textAlign: 'center' }}>
              <h3>Notification</h3>
            </Card.Header>
            <Card.Body className='notification'>
              {notification
                .map(noti => {
                  return (
                    <NotiCard key={noti.noti_id} noti={noti}/>
                  );
                })}
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey='NoReadNoti' title='읽지 않은 알림'>
          <Card>
            <Card.Header style={{ textAlign: 'center' }}>
              <h3>Notification</h3>
            </Card.Header>
            <Card.Body className='notification'>
              {notification
                .filter(noti=>!noti.noti_read)
                .map(noti => {
                  return (
                    <NotiCard key={noti.noti_id} noti={noti}/>
                  );
                })}
            </Card.Body>
          </Card>

        </Tab>
        <Tab eventKey='ReadNoti' title="읽은 알림">
          <Card>
            <Card.Header style={{ textAlign: 'center' }}>
              <h3>Notification</h3>
            </Card.Header>
            <Card.Body className='notification'>
              {notification
                .filter(noti=>noti.noti_read)
                .map(noti => {
                  return (
                    <NotiCard key={noti.noti_id} noti={noti}/>
                  );
                })}
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}