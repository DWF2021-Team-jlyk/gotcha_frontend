import React, { useCallback, useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { listAdd } from '../../modules/workspaceList';
import WorkListCardList from './components/worklist/WorkListCardList';
import WorkListCardModal from './components/worklist/WorkListCardModal';
import { disappearModal } from '../../modules/cardModal';
import "./css/WorkList.css"

const WorkList = (props) => {
  const { lists, ws_id } = props;
  const [listName, setListName] = useState('');
  const listEL = useRef(null);
  const [nextPosition, setNextPosition] = useState(0);
  const show = useSelector(state => state.cardModal.modalShow);

  const dispatch = useDispatch();

  const onListAdd = useCallback((list_name, position) => {
    dispatch(
      listAdd({
        list_name: list_name,
        ws_id: ws_id,
        position: position,
      }),
    );
  }, [lists]);

  const closeModal = useCallback(() => {
    dispatch(disappearModal());
  }, []);

  useEffect(() => {
    setNextPosition(lists.length);
  }, [lists]);
  return (
    <>
      <input
        placeholder='write listname'
        style={{marginLeft:11}}
        onChange={(e) =>
          setListName(e.target.value)
        }
        ref={listEL}
      />
      <Button
        style={{marginLeft:13}}
        variant='contained'
        color='primary'
        onClick={(e) => {
          onListAdd(listName, nextPosition);
          listEL.current.value = '';
          setListName("");
        }}
      >
        + Add Another List
      </Button>

      <div className="listStyle">
        {lists.map((list, index) => {
          return (
            <div key={list.list_id}>
              <WorkListCardList
                key={index}
                lists={lists}
                list={list}
                listId={list.list_id}
                ws_id={ws_id}
              />
            </div>
          );
        })}
      </div>
      {show && <WorkListCardModal show={show} handle={closeModal} />}
    </>
  );
};
export default WorkList;
