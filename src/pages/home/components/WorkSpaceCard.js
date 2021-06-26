import { Card, Row } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import noImg from "../../../image/gotcha.png";
import {AiOutlineStar} from "react-icons/ai";

const LinkStyle = {
  width:"300px",
  margin:"10px", 
  textDecoration: 'none', 
  color: "#212529",
  textAlign: "center",
  fontSize:"1rem"
}


const WorkSpaceCard = ({ workspaces}) => {


  return (
    <Link to={`workspace/${workspaces.WS_ID}`} style={LinkStyle}>
      <Card>
        <div style={{ textAlign: "center"}}>
        <Card.Img variant="top" style={{width:150}}src={noImg}/>
        </div>
        <Card.Body style={{backgroundColor:"#f7f7f7"}}>
          <Row>
            <Card.Text>
              <span style={{position:"relative", left:10}}>{workspaces.WS_NAME}</span>
              <AiOutlineStar style={{position:"relative", left:100, fontSize:25, color:"FFC947"}}/>
            </Card.Text>
          </Row>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default WorkSpaceCard;
