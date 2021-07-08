import React, { useCallback, useEffect, useRef, useState } from 'react';
import loadable from '@loadable/component';
import { AiFillEdit } from 'react-icons/all';
import '../../css/WorkListCard.css';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { cardUpdate } from '../../../../modules/workspaceCard';
import { registerCard } from '../../../../modules/cardForModal';

const WorkListCardModal = loadable(() => import('./WorkListCardModal'));

const WorkListCard = ({card}) => {
  const [openModal, setOpenModal] = useState(false);
  const [editable, setEditable] = useState(false);
  const [editbutton, setEditButton] = useState(false);
  const [cardName, setCardName] = useState("");
  const dispatch = useDispatch();
  const handleModal = () => {
    setOpenModal(false);
  };
  const cardInputEL = useRef(null);

  const onActiveInputClick = (card) => {
    if (editable === false) {
      setOpenModal(true);
      dispatch(registerCard(card));
    }
  };

  const onSaveCard =useCallback( cardName=> {
    console.log(cardName);
    dispatch(cardUpdate({...card, card_name:cardName}));
  }, [dispatch]);


  const handleEditable = async (e) => {
    await setEditable(true);
    cardInputEL.current.focus();
  };
  const handleDisEditable = (e) => {
    setEditable(false);
    console.log(e);
    if(e._reactName !== "onKeyPress")
      cardInputEL.current.value=card.card_name;
  }
  const showEditButton = () => setEditButton(true);
  const noShowEditButton = () => setEditButton(false);

  useEffect(()=>{
    setCardName(card.card_name);
  }, []);

  return (
    <>
      <div
        onMouseOver={showEditButton}
        onMouseOut={noShowEditButton}
        onBlur={handleDisEditable}
      >
        <div className='cardInfoDiv'>
          <div
            className='cardInputDiv'
            onClick={e=>onActiveInputClick(card)}
          >
            <input
              className='cardInput'
              defaultValue={cardName}
              disabled={!editable}
              ref={cardInputEL}
              onChange={(e)=>{
                setCardName(e.target.value);
              }}
              onKeyPress={e=>{
                if(e.key === "Enter"){
                  onSaveCard(cardName);
                  handleDisEditable(e);
                }
              }}
            />
          </div>
          <div
            onClick={handleEditable}
            className='cardButton'
          >
            <AiFillEdit
              opacity={!editbutton ? 0 : '0.5'}
              size='20'
            />
          </div>
        </div>
      </div>
      {
        openModal
        &&
        <WorkListCardModal
          cardId={card.card_id}
          show={openModal}
          handle={handleModal}
        />
      }
    </>
  );
};

export default WorkListCard;