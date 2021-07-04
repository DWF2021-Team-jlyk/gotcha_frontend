import { Card, Row } from 'react-bootstrap';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import noImg from '../../../image/gotcha.png';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { changeWorkspaceFav } from '../../../modules/workspace';
import { useDispatch } from 'react-redux';
import HomeStyles from '../HomeStyles';

const WorkSpaceCard = ({ workspace }) => {
  const isFav = is_fav => is_fav ? true : false;
  const dispatch = useDispatch();
  const [ws, setWs] = useState({...workspace});
  const onToggle = useCallback(
    ws_id => dispatch(changeWorkspaceFav(ws_id)),
    [dispatch],
  );
  useEffect(()=>{
    setWs({...workspace});
  }, [workspace]);
  return (
    <Card style={HomeStyles.cardStyle}>
      <div style={{ textAlign: 'center' }}>
        <Card.Img variant='top' style={{ width: 150 }} src={noImg} />
      </div>

      <Card.Body style={{ backgroundColor: '#f7f7f7' }}>
        <Row>
          <Card.Text style={{ display: 'flex' }}>
            <div style={{ width: 210, height: 40 }}>
              <Link to={`workspace/${ws.ws_id}`} style={HomeStyles.cardWorkName}>
                <span>{ws.ws_name}</span>
              </Link>
            </div>
            <div>
              {isFav(ws.is_fav) && <AiFillStar style={HomeStyles.starStyle} onClick={e=>onToggle(ws.ws_id)} />}
              {!isFav(ws.is_fav) && <AiOutlineStar style={HomeStyles.starStyle} onClick={e=>onToggle(ws.ws_id)} />}
            </div>
          </Card.Text>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default WorkSpaceCard;
