import Card from 'react-bootstrap/Card';
import '../../css/WorkListCardList.css';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import { AiOutlineDelete, AiOutlinePlusCircle } from 'react-icons/ai';
import { AiFillCopy } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import WorkListCard from './WorkListCard';
import { useDispatch, useSelector } from 'react-redux';
import { listDelete, listUpdate } from '../../../../modules/workspaceList';
import { cardAdd } from '../../../../modules/workspaceCard';
import { AiFillEdit } from 'react-icons/all';

const PlusIcon = {
  fontSize: '1.5rem',
  float: 'right',
};

const IconMargin = {
  marginRight: 10,
};

const WorkListCardList = (props) => {
  console.log(props)
  const { ws_id, list, listId } = props;
  const cardInputEl = useRef(null);
  const [listName, setListName] = useState("");
  const [cardTitle, setCardTitle] = useState('');
  const [position, setPosition] = useState(0);
  const [showCardInput, setShowCardInput] = useState(false);
  const cards = useSelector(state => state.workspaceCard.cards);
  const dispatch = useDispatch();

  const onChange = useCallback((e) => {
    setCardTitle(e.target.value);
  }, []);

  const onListNameChange = useCallback(e=>{
    setListName(e.target.value);
  },[]);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onListRemove = () => {
    dispatch(listDelete({ list_id: listId }));
  };

  const onCardAdd = () => {
    dispatch(cardAdd({
      list_id: listId,
      ws_id: ws_id,
      card_name: cardTitle,
      card_desc: "",
      card_start_date: "",
      card_end_date: "",
      position: position,
    }));
  };

  useEffect(() => {
    setPosition(
      cards.filter(
        card=>card.list_id === listId
      ).length
    )
  }, [cards]);

  useEffect(()=>{
    setListName(list.list_name);
  },[])

  console.log(position);
  return (
    <Card className='ListStyle'>
      <Card.Header
        className='CardHeaderStyle'
      >
        <input
          defaultValue={listName}
          onChange={onListNameChange}
        />
        <AiOutlinePlusCircle style={PlusIcon} onClick={handleClick} />
        <AiFillEdit
          style={{
            float: 'right',
            fontSize: '1.5rem',
          }}
          onClick={e => {
            dispatch(listUpdate({...list, list_name:listName}));
          }}
        />
      </Card.Header>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={(e) => {
            onListRemove();
            handleClose();
          }}
        >
          <AiFillDelete style={IconMargin} />
          List Delete
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <AiFillCopy style={IconMargin} />
          List Copy
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <AiOutlineDelete style={IconMargin} />
          Delete All Cards
        </MenuItem>
      </Menu>

      <Card.Body className='ListBodyStyle'>
        {cards
          .filter((card) => {
            return card.list_id === listId;
          })
          .map((card) => {
            return (
              <WorkListCard ws_id={ws_id} card={card} />
            );
          })}
        {showCardInput && (
          <div>
            <input
              //value={cardTitle}
              onChange={onChange}
              ref={cardInputEl}
              onBlur={(e) => {
                e.target.value = '';
                setShowCardInput(false);
              }}
            />
            <Button
              onClick={(e) => {
                if (cardInputEl.current.value !== '') {
                  onCardAdd();
                  cardInputEl.current.value = '';
                  setCardTitle('');
                }
                setShowCardInput(!showCardInput);
              }}
            >
              save
            </Button>
          </div>
        )}
      </Card.Body>

      <Card.Footer>
        <Button
          variant='contained'
          color='primary'
          onClick={async (e) => {
            await setShowCardInput(true);
            cardInputEl.current.focus();
          }}
        >
          + Add Another Card
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default WorkListCardList;
