import React, { useCallback, useEffect, useRef, useState } from 'react';
import loadable from '@loadable/component';
import { AiFillEdit } from 'react-icons/all';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { cardUpdate } from '../../../../modules/workspaceCard';
import { registerCard, showModal } from '../../../../modules/cardModal';
import { Badge } from '@material-ui/core';
import { Form } from 'react-bootstrap';
import "../../css/WorkListCard.css"
import {BiCheck} from 'react-icons/bi'

const WorkListCardModal = loadable(() => import('./WorkListCardModal'));

const WorkListCard = (props) => {
  const { card, ws_id } = props;
  const [openModal, setOpenModal] = useState(false);
  const [editable, setEditable] = useState(false);

  const [editbutton, setEditButton] = useState(false);
  const [cardName, setCardName] = useState("");
  const dispatch = useDispatch();
  const handleModal = useCallback(() => {
    setOpenModal(false);
  },[]);

  const cardInputEL = useRef(null);

  const onActiveInputClick = useCallback((card) => {
    if (editable === false) {
      // setOpenModal(true);
      dispatch(showModal());
      dispatch(registerCard(card));
    }
  },[]);

  const onSaveCard =useCallback( (cardName, card)=> {
    dispatch(cardUpdate({...card, card_name:cardName}));
  }, []);


  const handleEditable = useCallback( async (e) => {
    await setEditable(true);
    cardInputEL.current.focus();
  },[]);
  const handleDisEditable = useCallback((e) => {
    setEditable(false);
    if(e._reactName !== "onKeyPress")
      cardInputEL.current.value=card.card_name;
  },[]);
  const showEditButton = useCallback(() =>
    setEditButton(true),[]
  );
  const noShowEditButton = useCallback(() =>
    setEditButton(false),[]
  );

  useEffect(()=>{
    setCardName(card.card_name);
  }, [card]);

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

            {
              card.card_isdone === '1' 
              ?
              <Badge badgeContent={'✓'} color="primary" >
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
            </Badge>
            :<input
              className='cardInput'
              defaultValue={cardName}
              disabled={!editable}
              ref={cardInputEL}
              onChange={(e)=>{
                setCardName(e.target.value);
              }}
              onKeyPress={e=>{
                if(e.key === "Enter"){
                  onSaveCard(cardName, card);
                  handleDisEditable(e);
                }
              }}
            />

            }
            

          </div>

          <div
            onClick={handleEditable}
            className='cardButton'
          >
            <AiFillEdit
              style={{marginLeft:10}}
              opacity={!editbutton ? 0 : '0.5'}
              size='24'
            />
             
          </div>

        </div>
      </div>
    </>
  );
};

export default WorkListCard;