import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import '../../layout/css/Layout.css';
import WorkList from './WorkList';
import Card from 'react-bootstrap/Card';
import loadable from '@loadable/component';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { postList } from '../../modules/workspaceList';
import { postCard } from '../../modules/workspaceCard';

const Calendar = loadable(() => import('../calendar'));
const Board = loadable(() => import('../board'));

const Workspace = () => {
  // const {  ws_id, lists, cards } = props;
  const { ws_id } = useParams();
  const [value, setValue] = useState(1);
  const lists = useSelector((state) => state.workspaceList.lists);
  const cards = useSelector((state) => state.workspaceCard.cards);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(postList(ws_id));
    dispatch(postCard(ws_id));
  }, [ws_id]);

  return (
    <Card
      style={{
        margin: 20,
        width: 1600,
        height: 900,
      }}
    >
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#WorkList">
          <Nav.Item>
            <Nav.Link
              href="#WorkList"
              onSelect={(e) => {
                setValue(1);
              }}
            >
              WorkList
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#Calendar" onSelect={(e) => setValue(2)}>
              Calendar
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#Board" onSelect={(e) => setValue(3)}>
              Board
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        {value === 1 && (
          <WorkList
            ws_id={ws_id}
            lists={lists}
            cards={cards}
            // setLists={setLists}
            // setCards={setCards}
          />
        )}
        {value === 2 && <Calendar/>}
        {value === 3 && <Board/>}
      </Card.Body>
    </Card>
  );
};

export default Workspace;
