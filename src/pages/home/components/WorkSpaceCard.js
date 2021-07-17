import { Card, Row } from 'react-bootstrap';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import uploadImg from '../../../upload/workspaces';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { updateWorkspace } from '../../../modules/workspace';
import { useDispatch } from 'react-redux';
import HomeStyles from '../HomeStyles';


const WorkSpaceCard = ({ workspace }) => {
  const isFav = is_fav => is_fav ? true : false;
  const dispatch = useDispatch();
  const [ws, setWs] = useState({ ...workspace });
  const onToggle = useCallback(() =>
      dispatch(updateWorkspace({ ...workspace, is_fav: (workspace.is_fav ? 0 : 1) })),
    [workspace.is_fav],
  );

  useEffect(() => {
    setWs({ ...workspace });
  }, [workspace]);

  const imgSrc = `/image/bg/${ws.ws_id}/${ws.ws_isImage}`;
  const noImg = 'gotcha.png';

  return (
    <Card style={HomeStyles.cardStyle}>
      <div style={{ textAlign: 'center' }}>
        <Card.Img variant='top' style={{ width:'100%', height: 150}} src={ws.ws_isImage === null ? noImg : imgSrc} />
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
              {isFav(ws.is_fav) && <AiFillStar style={HomeStyles.starStyle} onClick={e => onToggle(ws.ws_id)} />}
              {!isFav(ws.is_fav) && <AiOutlineStar style={HomeStyles.starStyle} onClick={e => onToggle(ws.ws_id)} />}
            </div>
          </Card.Text>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default WorkSpaceCard;
