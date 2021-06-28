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

const starStyle= {
  position:"relative",
  left:100,
  fontSize:25,
  color:"FFC947"
}



const WorkSpaceCard = ({workspace, onToggle}) => {
  const isFav = is_fav => is_fav? true : false;
  return (
    <Card style={cardStyle}>
      <div style={{ textAlign: 'center' }}>
        <Card.Img variant='top' style={{ width: 150 }} src={noImg} />
      </div>

      <Card.Body style={{ backgroundColor: '#f7f7f7' }}>
        <Row>
          <Card.Text>
            <Link to={`workspace/${workspace.ws_id}`} >
              <span style={{ position: 'relative', left: 10 }}>
                {workspace.ws_name}
              </span>
            </Link>
            {isFav(workspace.is_fav) &&
            <AiFillStar
              style={{
                position: 'relative',
                left: 10, fontSize: 25,
                color: 'FFC947',
              }}
              onClick={onToggle}
            />}
            {!isFav(workspace.is_fav) &&
            <AiOutlineStar
              style={{
                position: 'relative',
                left: 10, fontSize: 25,
                color: 'FFC947',
              }}
              onClick={onToggle}
            />}
          </Card.Text>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default WorkSpaceCard;
