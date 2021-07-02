import React, { useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import WorkSpaceData from '../../DummyData/WorkSpaceData';
import { useDispatch, useSelector } from 'react-redux';
import { listAdd } from '../../modules/workspaceList';
import WorkListCardList from './components/worklist/WorkListCardList';
import {addList} from '../../lib/workListAPI';
//import {addList} from '../../modules/addlist';


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
  const listEL = useRef(null);
  
  const dispatch = useDispatch();

  const onAdd = async() => {
    try{
      const response = await addList(listName, ws_id);
      dispatch(listAdd(response.data));
    }catch(e){
      console.log(e);
    }
  };


  return (
    <>
      <input onChange={(e) =>setListName(e.target.value)} ref={listEL} />
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => {
          onAdd(listName, ws_id);
          listEL.current.value="";
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
                ws_id={ws_id}
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
