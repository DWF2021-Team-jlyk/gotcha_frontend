import React, { useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import '../../layout/css/Layout.css';
import loadable from '@loadable/component';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { listUnmount, listUpdate, postList } from '../../modules/workspaceList';
import { cardUnmount, postCard } from '../../modules/workspaceCard';
import { postWorkspaceMember, wsMemberUnmount } from '../../modules/workspaceMember';
import { MyTable } from '../board/index';
import PostListPage from'../board/index';

const WorkList = loadable(() => import('./WorkList'));
const Calendar = loadable(() => import('../calendar'));
// const Board = loadable(() => import('../board'));
//const MyTable = loadable(() => import('../board'));

const Workspace = () => {
  // const {  ws_id, lists, cards } = props;
  const { ws_id } = useParams();
  const lists = useSelector((state) => state.workspaceList.lists);
  const cards = useSelector((state) => state.workspaceCard.cards);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postList({ ws_id: ws_id }));
    dispatch(postCard({ ws_id: ws_id }));
    dispatch(postWorkspaceMember(ws_id));
    return () => {
      dispatch(cardUnmount());
      dispatch(listUnmount());
      dispatch(wsMemberUnmount());
    }
  }, [ws_id]);

  return (
    <>
      <div
        style={{
          margin: 20,
          width: 1600,
          height: 900,
          outline: '1px',
          outlineStyle: 'solid',
          outlineColor: '#D8D8D8',
        }}
      >
        <Tabs
          defaultActiveKey="WorkList"
          style={{
            background: '#F7F7F7',
            marginBottom: 10,
          }}
          mountOnEnter={true}
        >
          <Tab
            title="WorkList"
            eventKey="WorkList"
            style={{
              margin: 5,
            }}
          >
            <WorkList ws_id={ws_id} lists={lists} cards={cards} />
          </Tab>
          <Tab
            title="Calendar"
            eventKey="Calendar"
            style={{
              margin: 5,
            }}
          >
            <Calendar />
          </Tab>
          <Tab
            title="Board"
            eventKey="Board"
            style={{
              margin: 5,
            }}
          >
            <PostListPage ws_id = {ws_id}/>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Workspace;
