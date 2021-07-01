import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import WorkSpaceData from '../../DummyData/WorkSpaceData';
import { useDispatch, useSelector } from 'react-redux';
//import { addList, postList } from '../../modules/workspaceList';
import WorkListCardList from './components/worklist/WorkListCardList';
import {addList} from '../../modules/addList';

const listStyle = {
    width: "97%",
    height: 800,
    display: "flex",
    overflowX: "auto",
    margin: "10px",
    whiteSpace: "nowrap"
};

const WorkList = (props) => {
  const { cards, lists, ws_id } = props;
  const [listName, setListName] = useState('');
  const dispatch = useDispatch();

  return (
    <>
      <input value={listName} onChange={(e) =>setListName(e.target.value)} />
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => {
          // console.log(e);
          // console.log(listName);
          dispatch(addList(listName, ws_id));
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
