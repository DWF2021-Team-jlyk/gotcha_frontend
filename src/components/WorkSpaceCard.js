import { Card, Row } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const WorkSpaceCard = ({ title, id }) => {
  return (
    <Link to={`workspace/${id}`} style={{width:"18rem", margin:"10px"}}>
      <Card style={{ width: "18rem", }}>
        <Card.Img variant="top" width={200} height={150} />
        <Card.Body>
          <Row>
            <Card.Text>{title}</Card.Text>
          </Row>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default WorkSpaceCard;
