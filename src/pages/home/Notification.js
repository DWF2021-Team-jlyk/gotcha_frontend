import React, { useState } from "react";
import { Alert, Card } from "react-bootstrap";
import "./Cards.css";
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

export default function Notification({ allNoti, unreadNoti }) {

  const returnTypeTitle = (type) => {
    switch (type) {
      case "c":
        return "Card Noti"; //card
      case "b":
        return "Board Noti"; //board
      case "i":
        return "Invite Noti"; //invite
      default:
        return "CheckList Noti"; //todo
    }
  }
  const returnTypeColor = (type) => {
    switch (type) {
      case "c":
        return "primary"; //card
      case "b":
        return "danger"; //board
      case "i":
        return "success"; //invite
      default:
        return "secondary"; //todo
    }


  };

  return (
    <div>
      <Tabs defaultActiveKey="allNoti" transition={false} id="noanim-tab-example">
        <Tab eventKey="allNoti" title="전체 알림">

          <Card>
            <Card.Header style={{ textAlign: "center" }}>
              <h3>Notification</h3>
            </Card.Header>
            <Card.Body className="notification">
              {allNoti.map((noti, index) => {
                return (
                  <Alert key={index} variant={returnTypeColor(noti.noti_type)}>
                    <Alert.Link href="#" style={{ textDecoration: "none" }}>
                      <h4 style={{ marginBottom: 20 }}>{noti.ws_name}</h4>
                    </Alert.Link>
                    <Card>
                      <Card.Header>{returnTypeTitle(noti.noti_type)}</Card.Header>
                      <Card.Body>{noti.noti_desc}</Card.Body>
                      <Card.Footer>{noti.NOTI_TIME}</Card.Footer>
                    </Card>
                  </Alert>
                );
              })}
            </Card.Body>
          </Card>

        </Tab>
        <Tab eventKey="unreadNoti" title="읽지 않은 알림">
         
        <Card>
            <Card.Header style={{ textAlign: "center" }}>
              <h3>Unread Notification</h3>
            </Card.Header>
            <Card.Body className="notification">
              {unreadNoti.map((noti, index) => {
                return (
                  <Alert key={index} variant={returnTypeColor(noti.noti_type)}>
                    <Alert.Link href="#" style={{ textDecoration: "none" }}>
                      <h4 style={{ marginBottom: 20 }}>{noti.ws_name}</h4>
                    </Alert.Link>
                    <Card>
                      <Card.Header>{returnTypeTitle(noti.noti_type)}</Card.Header>
                      <Card.Body>{noti.noti_desc}</Card.Body>
                      <Card.Footer>{noti.NOTI_TIME}</Card.Footer>
                    </Card>
                  </Alert>
                );
              })}
            </Card.Body>
          </Card>

        </Tab>
      </Tabs>
    </div>
  );
}
