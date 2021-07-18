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
import {
  deleteList,
  listDelete,
  listUpdate,
} from '../../../../modules/workspaceList';
import { cardAdd, cardUpdate } from '../../../../modules/workspaceCard';
import { AiFillEdit } from 'react-icons/all';
import { Form } from 'react-bootstrap';

const PlusIcon = {
  fontSize: '1.5rem',
  float: 'right',
};

const IconMargin = {
  marginRight: 10,
};

const WorkListCardList = (props) => {
  const { ws_id, list, listId } = props;
  const cardInputEl = useRef(null);
  const [listName, setListName] = useState('');
  const [cardTitle, setCardTitle] = useState('sss');
  const [position, setPosition] = useState(0);
  const [showCardInput, setShowCardInput] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const cards = useSelector((state) => state.workspaceCard.cards);
  const userId = useSelector((state) => state.userInfo.userId);

  const dispatch = useDispatch();

  const onChange = (e) => {
    setCardTitle(e.target.value);
  };

  const onListNameChange = useCallback(
    (e) => {
      setListName(e.target.value);
    },
    [listName],
  );

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const onListRemove = () => {
    dispatch(deleteList(list));
  };

  const onCardAdd = () => {
    dispatch(
      cardAdd({
        list_id: list.list_id,
        ws_id: ws_id,
        card_name: cardTitle,
        card_desc: '',
        card_isdone: '0',
        card_start_date: '',
        card_end_date: '',
        position: position,
        user_id: userId,
      }),
    );
  };

  useEffect(() => {
    setPosition(cards.filter((card) => card.list_id === listId).length);
  }, [cards, list]);

  useEffect(() => {
    setListName(list.list_name);
  }, [list]);

  return (
    <Card className="ListStyle">
      <Card.Header className="CardHeaderStyle">
        <input defaultValue={listName} onChange={onListNameChange} />
        <AiOutlinePlusCircle style={PlusIcon} onClick={handleClick} />

        <AiFillEdit
          style={{
            float: 'right',
            fontSize: '1.5rem',
          }}
          onClick={(e) => {
            dispatch(listUpdate({ ...list, list_name: listName }));
          }}
        />
      </Card.Header>

      <Menu
        id="simple-menu"
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

      <Card.Body className="ListBodyStyle">
        {cards
          .filter((card) => {
            return card.list_id === listId;
          })
          .map((card, index) => {
            return (
              <WorkListCard key={card.card_id} ws_id={ws_id} card={card} />
            );
          })}

        {showCardInput && (
          <div
            onBlur={(e) => {
              e.target.value = '';
              setShowCardInput(false);
            }}
          >
            <input
              onChange={onChange}
              ref={cardInputEl}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (e.target.value !== '') {
                    console.log('TTTTTTTTTTTTTTTT', cardTitle);
                    onCardAdd();
                    e.target.value = '';
                    setCardTitle('');
                    setShowCardInput(!showCardInput);
                  }
                }
              }}
            />
            {/*<Button*/}
            {/*  onClick={(e) => {*/}
            {/*    if (cardInputEl.current.value !== '') {*/}
            {/*      onCardAdd();*/}
            {/*      cardInputEl.current.value = '';*/}
            {/*      setCardTitle('');*/}
            {/*    }*/}
            {/*    setShowCardInput(!showCardInput);*/}
            {/*  }}*/}
            {/*>*/}
            {/*  save*/}
            {/*</Button>*/}
          </div>
        )}
      </Card.Body>

      <Card.Footer>
        <Button
          variant="contained"
          color="primary"
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
