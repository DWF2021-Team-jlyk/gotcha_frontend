import { Card, Row } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import noImg from "../image/gotcha.png";
import {AiOutlineStar, AiTwotoneStar} from "react-icons/ai";
import axios from "axios";

const LinkStyle = {
  width:"300px",
  margin:"10px", 
  textDecoration: 'none', 
  color: "#212529",
  textAlign: "center",
  fontSize:"1rem"
}

const starStyle= {
  position:"relative", 
  left:100, 
  fontSize:25, 
  color:"FFC947"
}


function CardFav({is_fav, ws_id}){
  if(is_fav === "0"){ //즐찾 안됨
    return <AiOutlineStar onClick={() => changeFav(ws_id, "1")} style={starStyle}/>
    
  }else if(is_fav === "1"){ //즐찾됨
    return <AiTwotoneStar  onClick={() => changeFav(ws_id, "0")} style={starStyle}/>
  }
}

const changeFav = async(ws_id, is_fav) => {
  const Fav = await axios.post("/home/favUpdate", {
    user_id: "user01@naver.com",
    ws_id: ws_id,
    is_fav: is_fav
  });

  console.log(ws_id)

}

const WorkSpaceCard = ({ workspaces}) => {
  return (
   
      <Card style={LinkStyle}>
        <Link to={`workspace/${workspaces.WS_ID}`} >
          <div style={{ textAlign: "center"}}>
            <Card.Img variant="top" style={{width:150}} src={noImg}/>
          </div>
        </Link>
        <Card.Body style={{backgroundColor:"#f7f7f7"}}>
          <Row>
            <Card.Text>
              <Link to={`workspace/${workspaces.WS_ID}`} >
                <span style={{position:"relative", left:10}}>{workspaces.WS_NAME}</span>
              </Link>
              <CardFav is_fav= {workspaces.IS_FAV} ws_id={workspaces.WS_ID} style={{position:"relative", left:100, fontSize:25, color:"FFC947"}}/>
            </Card.Text>
          </Row>
        </Card.Body>
      </Card>

  );
};

export default WorkSpaceCard;
