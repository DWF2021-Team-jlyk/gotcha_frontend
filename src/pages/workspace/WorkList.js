import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import WorkSpaceData from '../../DummyData/WorkSpaceData';
import { useDispatch, useSelector } from 'react-redux';
//import { addList, postList } from '../../modules/workspaceList';
import WorkListCardList from './components/worklist/WorkListCardList';
import addList from '../../modules/addlist';

const listStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  overflowX: 'auto',
  margin: '10px',
  whiteSpace: 'nowrap',
};

const WorkList = (props) => {
  const { cards, lists, ws_id } = props;
  const [listName, setListName] = useState('');
  const dispatch = useDispatch();
  // const {list_name, ws_id} = useSelector(({addlist})=>({
  //   list_name:addlist.list_name,
  //   ws_id:addlist.ws_id,
  // }))

  useEffect(() => console.log(listName), [listName]);
  const response = async (listName, ws_id) => await axios({
    url: 'http://192.168.20.18:8080/test/post',
    method: 'post',
    headers: { 'content-type': 'application/json' },
    data: {
      list_name: listName,
      ws_id: ws_id,
    },
  });

  return (
    <>
      <input onChange={(e) => setListName(e.target.value)} />
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => {
          dispatch(addList({listName, ws_id}))
        }}
      >
        + Add Another List
      </Button>

      <div style={listStyle}>
        {lists.map((list, index) => {
          return (
            <div key={index}>
              <WorkListCardList
                lists={lists}
                list={list}
                listId={list.list_id}
                cards={cards}
                // setList={setLists}
              />
            </div>
          );
        })}
        <div style={{ margin: 10 }}></div>
      </div>
    </>
  );
};
export default WorkList;
