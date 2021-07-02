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

const PlusIcon = {
  fontSize: '1.5rem',
  float: 'right',
};

const IconMargin = {
  marginRight: 10,
};

const ListStyle = {
  float: 'left',
  width: '300px',
  marginRight: 10,
  overflowY: 'scroll',
};

const WorkListCardList = (props) => {
  const { lists, list, listId, cards, setLists, setCards } = props;
  const cardInputEl = useRef(null);
  const [cardTitle, setCardTitle] = useState('');
  const [showCardInput, setShowCardInput] = useState(false);
  const onChange = useCallback(e => {
    setCardTitle(e.target.value);
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className='ListStyle'>
      <Card.Header className='CardHeaderStyle'>
        {' '}
        {list.list_name}{' '}
        <AiOutlinePlusCircle style={PlusIcon} onClick={handleClick} />
      </Card.Header>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
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
            return card.LIST_ID === listId;
          })
          .map((card) => {
            return (
              <WorkListCard cards={cards} card={card} setCard={setCards} />
            );
          })}
        {showCardInput &&
        <div>

          <input
            value={cardTitle}
            onChange={onChange}
            ref={cardInputEl}
            onBlur={e => {
              e.target.value = '';
              setShowCardInput(false);
            }}
            onfocusout={e => {
              e.target.value = '';
            }}
          />
          <Button>save</Button>
        </div>
        }
      </Card.Body>

      <Card.Footer>
        <Button
          variant='contained'
          color='primary'
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
