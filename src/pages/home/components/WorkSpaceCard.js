import { Card, Row } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import noImg from '../../../image/gotcha.png';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const cardStyle = {
  width: '300px',
  margin: '10px',
  padding: '0px',
  textAlign: 'center',
  fontSize: '1rem',
};

const cardWorkName = {
  position: 'relative', 
  left:20, 
  top:5,
  textDecoration: 'none',
  color: '#212529'
}


const WorkSpaceCard = ({workspace, onToggle}) => {
  const isFav = is_fav => is_fav? true : false
  return (
    <Card style={cardStyle}>
      <div style={{ textAlign: 'center' }}>
        <Card.Img variant='top' style={{ width: 150 }} src={noImg} />
      </div>

      <Card.Body style={{ backgroundColor: '#f7f7f7' }}>
        <Row>
          <Card.Text style={{display:"flex"}}>
            <div style={{width:210, height:40}}>
              <Link to={`workspace/${workspace.ws_id}`} style={cardWorkName}>
                <span>{workspace.ws_name}</span>
              </Link>
            </div>

            <div>
              {isFav(workspace.is_fav) &&
              //즐찾일때
              <AiFillStar
                style={{
                  position: 'relative',
                  left: 30,
                  top:5,
                  fontSize: 28,
                  color: 'FFC947',
                }}
                onClick={onToggle}
              />}

              {!isFav(workspace.is_fav) &&
              <AiOutlineStar
                style={{
                  position: 'relative',
                  left: 30, 
                  top:5,
                  fontSize: 28,
                  color: 'FFC947',
                }}
                onClick={onToggle}
              />}
            </div>
            
          </Card.Text>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default WorkSpaceCard;
