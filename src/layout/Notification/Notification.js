import React, {useState} from "react";
import {Alert, Card} from "react-bootstrap";

export default function Notification(props) {

    const returnTypeColor = (type) =>{
        switch (type) {
            case "card": return "primary";
            case "board" : return "danger";
            case "invite" : return "success";
            default: return "secondary";
        }
    }

    const [notis, setNotis] = useState(
        [
            {title: "Board Noti Test", workspaceName: "test1", desc: "test Noti", type: "board", endDate: "2021/06/30"},
            {title: "Card Noti Test", workspaceName: "test2", desc: "test Noti", type: "card", endDate: "2021/06/30"},
            {title: " Noti Test", workspaceName: "test3", desc: "test Noti", type: "noti", endDate: "2021/06/30"},
            {title: "Invite Noti Test", workspaceName: "test4", desc: "test Noti", type: "invite", endDate: "2021/06/30"},
        ]
    )
    return (
        <div>
            <Card>
                <Card.Header>
                    <h3>Notification</h3>
                </Card.Header>
                <Card.Body style={{height: 800, overflowY: "scroll"}}>

                    {notis.map((noti, index) => {
                        return <Alert
                            key={index}
                            variant={returnTypeColor(noti.type)}>
                            <Alert.Link href="#">
                                <h4>{noti.workspaceName}</h4>
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
