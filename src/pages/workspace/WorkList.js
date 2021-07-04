import React, { useCallback, useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import WorkSpaceData from '../../DummyData/WorkSpaceData';
import { useDispatch, useSelector } from 'react-redux';
import { listAdd } from '../../modules/workspaceList';
import WorkListCardList from './components/worklist/WorkListCardList';
import { addList } from '../../lib/workListAPI';
//import {addList} from '../../modules/addlist';


const listStyle = {
  width: '97%',
  height: 800,
  display: 'flex',
  overflowX: 'auto',
  margin: '10px',
  whiteSpace: 'nowrap',
};

const WorkList = (props) => {
  const { cards, lists, ws_id } = props;
  const [listName, setListName] = useState('');
  const listEL = useRef(null);
  const [nextPosition, setNextPosition] = useState(0);

  const dispatch = useDispatch();

  const onListAdd = () => {
    dispatch(listAdd({list_name:listName, ws_id:ws_id, position:nextPosition}));
  }

  useEffect(()=>{
    setNextPosition(Math.max(lists.map(list=>list.position))+1);
    console.log(nextPosition);
  },[lists]);


  return (
    <>
      <input
        onChange={(e) =>
          setListName(e.target.value)
        }
        ref={listEL}
      />
      <Button
        variant='contained'
        color='primary'
        onClick={(e) => {
          onListAdd();
          listEL.current.value = '';
        }}
      >
        + Add Another List
      </Button>

      <div style={listStyle}>
        {lists
          .map((list, index) => {
          return (
            <div key={index}>
              <WorkListCardList
                key={index}
                lists={lists}
                list={list}
                listId={list.list_id}
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
