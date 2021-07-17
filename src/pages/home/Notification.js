import React, { useEffect} from 'react';
import { Card } from 'react-bootstrap';
import './Cards.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useDispatch, useSelector } from 'react-redux';
import NotiCard from './components/NotiCard';
import {BsBellFill} from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import { postNoti } from '../../modules/notification';

export default function Notification() {
  const notification = useSelector(state => state.notification.noti);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(postNoti());
  }, [history]);

  return (
    <div>
      <Tabs defaultActiveKey='allNoti' transition={false} id='noanim-tab-example'>
        <Tab eventKey='allNoti' title='전체 알림'>
          <Card>
            <Card.Header style={{ textAlign: 'center' }}>
              <h3> <BsBellFill size='25'/> Notification</h3>
            </Card.Header>
            <Card.Body className='notification'>
              {notification
                .map(noti => {
                  return (
                    <NotiCard key={noti.NOTI_ID} noti={noti}/>
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
                .filter(noti=>noti.NOTI_CHECKED !== "1")
                .map(noti => {
                  return (
                    <NotiCard key={noti.NOTI_ID} noti={noti}/>
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
                .filter(noti=>noti.NOTI_CHECKED === "1")
                .map(noti => {
                  return (
                    <NotiCard key={noti.NOTI_ID} noti={noti}/>
                  );
                })}
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}