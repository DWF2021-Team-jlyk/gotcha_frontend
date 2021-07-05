import React, { useRef, useState } from 'react';
import loadable from '@loadable/component';
import { AiFillEdit } from 'react-icons/all';
import '../../css/WorkListCard.css';
import { Button } from 'react-bootstrap';

const WorkListCardModal = loadable(() => import('./WorkListCardModal'));

const WorkListCard = (props) => {
  const { card } = props;
  const [openModal, setOpenModal] = useState(false);
  const [editable, setEditable] = useState(false);
  const [editbutton, setEditButton] = useState(false);
  const [cardName, setCardName] = useState('');
  const handleModal = () => {
    setOpenModal(false);
  };
  const cardInputEL = useRef(null);

  const onClick = () => {
    if (editable === false) {
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
          cardId={card.card_id}
          show={openModal}
          handle={handleModal}
        />
      }
    </>
  );
};

export default WorkListCard;