import React from "react";
import {Alert, Card} from "react-bootstrap";
import "./Cards.css"

export default function Notification({notis}) {

    const returnTypeColor = (type) => {
        switch (type) {
            case "card": return "primary";
            case "board" : return "danger";
            case "invite" : return "success";
            default: return "secondary";
        }
    }

    return (
        <div>
            <Card>
                <Card.Header style={{textAlign:"center"}}>
                    <h3>Notification</h3>
                </Card.Header>
                {/*<Card.Body style={{height: 800, overflowY: "scroll"}}>*/}
                    <Card.Body className="notification">
                    {notis.map((noti, index) => {
                        return <Alert
                            key={index}
                            variant={returnTypeColor(noti.type)}>
                            <Alert.Link href="#" style={{textDecoration: 'none'}}>
                                <h4 style={{marginBottom:20}}>{noti.workspaceName}</h4>
                            </Alert.Link>
                            <Card>
                                <Card.Header>{noti.title}</Card.Header>
                                <Card.Body>{noti.desc}</Card.Body>
                                <Card.Footer>{noti.endDate}</Card.Footer>
                            </Card>
                        </Alert>
                    })}

                </Card.Body>
            </Card>
        </div>
    );
}
