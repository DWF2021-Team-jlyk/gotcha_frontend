import Card from 'react-bootstrap/Card';
import '../../css/WorkListCardList.css';
import React, { useCallback, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import { AiOutlineDelete, AiOutlinePlusCircle } from 'react-icons/ai';
import { AiFillCopy } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import WorkListCard from './WorkListCard';
import { useDispatch, useSelector } from 'react-redux';
import { deleteList } from '../../../../lib/workListAPI';
import { listDelete } from '../../../../modules/workspaceList';
import { addCard } from '../../../../lib/workListAPI';
import { cardAdd } from '../../../../modules/workspaceCard';

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
  const [cardTitle, setCardTitle] = useState('');
  const [cardDesc, setCardDesc] = useState('');
  const [cardStartDate, setCardStartDate] = useState('');
  const [cardEndDate, setCardEndDate] = useState('');
  const [showCardInput, setShowCardInput] = useState(false);
  const cards = useSelector(state=>state.workspaceCard.cards);
  const dispatch = useDispatch();

  const onChange = useCallback((e) => {
    setCardTitle(e.target.value);
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onListRemove = () => {
      dispatch(listDelete({list_id:listId}));
  };

  const onCardAdd = async() =>{
    try{
      const response = await addCard(cardTitle, cardDesc, listId, ws_id, cardStartDate, cardEndDate);
      console.log(cardDesc);
      dispatch(cardAdd(response.data));
    }catch(e){
      console.log(e);
    }
  };

  console.log(cards);
  return (
    <Card className="ListStyle">
      <Card.Header className="CardHeaderStyle">
        {' '}
        {list.list_name}{' '}
        <AiOutlinePlusCircle style={PlusIcon} onClick={handleClick} />
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

      <Card.Body>
        {cards
          .filter((card) => {
            return card.list_id === listId;
          })
          .map((card) => {
            return (
              <WorkListCard card={card} />
            );
          })}
        {showCardInput && (
          <div>
            <input
              //value={cardTitle}
              onChange={(e) => setCardTitle(e.target.value)}
              ref={cardInputEl}
              // onBlur={(e) => {
              //   e.target.value = '';
              //   setShowCardInput(false);
              // }}
              // onfocusout={(e) => {
              //   e.target.value = '';
              // }}
            />
            <Button
              onClick={(e) => {
                onCardAdd();
                cardInputEl.current.value = "";
              }}
            >
              save
            </Button>
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
            // console.log(cardInputEl.current);
          }}
        >
          + Add Another Card
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default WorkListCardList;
