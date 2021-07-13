import React, { useEffect} from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import '../../layout/css/Layout.css';
import loadable from '@loadable/component';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { postList } from '../../modules/workspaceList';
import { postCard } from '../../modules/workspaceCard';

const WorkList = loadable(()=>import('./WorkList'));
const Calendar = loadable(() => import('../calendar'));
const Board = loadable(() => import('../board'));

const Workspace = () => {
  // const {  ws_id, lists, cards } = props;
  const { ws_id } = useParams();
  const lists = useSelector((state) => state.workspaceList.lists);
  const cards = useSelector((state) => state.workspaceCard.cards);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(postList({ws_id:ws_id}));
    dispatch(postCard({ws_id:ws_id}));
  }, [ws_id]);

  return (
    <>
      <div
        style={{
          margin: 20,
          width: 1600,
          height: 900,
          outline: "1px",
          outlineStyle:"solid",
          outlineColor:'#D8D8D8',
        }}>
        <Tabs
          defaultActiveKey='WorkList'
          style={{
            background: '#F7F7F7',
            marginBottom: 10,
          }}
        >
          <Tab
            title='WorkList'
            eventKey='WorkList'
            style={{
              margin: 5,
            }}
          >
            <WorkList
              ws_id={ws_id}
              lists={lists}
              // cards={cards}
            />
          </Tab>
          <Tab
            title='Calendar'
            eventKey='Calendar'
            style={{
              margin: 5,
            }}
          >
            <Calendar />
          </Tab>
          <Tab
            title='Board'
            eventKey='Board'
            style={{
              margin: 5,
            }}
          >
            <Board />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Workspace;
