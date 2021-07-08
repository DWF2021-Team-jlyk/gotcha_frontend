import React, { useRef, useState } from 'react';
import loadable from '@loadable/component';
import { AiFillEdit } from 'react-icons/all';
import { useDispatch } from 'react-redux';
import { getCardId } from '../../../../modules/cardId';
import { Button } from 'react-bootstrap';

const WorkListCardModal = loadable(() => import('./WorkListCardModal'));

const WorkListCard = (props) => {
  const { card, ws_id } = props;

  console.log("WorkListCard card",card);
  const [openModal, setOpenModal] = useState(false);
  const [editable, setEditable] = useState(false);

  const [editbutton, setEditButton] = useState(false);
  const dispatch = useDispatch();
  
  const handleModal = () => {
    setOpenModal(false);
  };

  const cardInputEL = useRef(null);

  const onClick = () => {
    if (editable === false) {
      // console.log(card.cardId);
      console.log(card.card_id);
      dispatch(getCardId(card.card_id));
      setOpenModal(true);
    }
  };
  const handleEditable = async (e) => {
    await setEditable(true);
    cardInputEL.current.focus();
  };
  const handleDisEditable = () => setEditable(false);
  const showEditButton = () => setEditButton(true);
  const noShowEditButton = () => setEditButton(false);
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
            onClick={onClick}
            // 모달열리는 onClick
          >

            <input
              className='cardInput'
              defaultValue={card.card_name}
              disabled={!editable}
              ref={cardInputEL}
          
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
        {
          editable &&
          <Button className='cardModifyButton'>Save</Button>
        }
      </div>
      {
        openModal
        &&
        <WorkListCardModal
          card={card}
     
          show={openModal}
          ws_id={ws_id}
          
          handle={handleModal}
        />
      }
    </>
  );
};

export default WorkListCard;