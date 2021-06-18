import {Button, Card, Row} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

const WorkSpaceCard = ({title}) => {
    return (
        <Card
            style={{width: '20rem', margin: "10px"}}
        >
            <Card.Img variant="top" width={200} height={150}/>
            <Card.Body>
                <Row>
                    <Card.Text>
                        {title}
                    </Card.Text>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default WorkSpaceCard;