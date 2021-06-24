import { Card, Row } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const LinkStyle = {
  width:"18rem", 
  margin:"10px", 
  textDecoration: 'none', 
  color: "#212529",
  textAlign: "center",
  fontSize:"1rem"
}
const WorkSpaceCard = ({ workspaces}) => {
  return (
    <Link to={`workspace/${workspaces.ws_id}`} style={LinkStyle}>
      <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" width={200} height={150} />
        <Card.Body>
          <Row>
            <Card.Text >{workspaces.ws_name}</Card.Text>
          </Row>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default WorkSpaceCard;
