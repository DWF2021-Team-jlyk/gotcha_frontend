import React, { useRef, useState } from 'react';
import loadable from '@loadable/component';
import { AiFillEdit } from 'react-icons/all';
import { useDispatch } from 'react-redux';
import { getCardId } from '../../../../modules/cardId';

const WorkListCardModal = loadable(() => import('./WorkListCardModal'));

const WorkListCard = (props) => {
  const { ws_id , card } = props;
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
    await setEditable(true)
    cardInputEL.current.focus();
  };
  const handleDisEditable = () => setEditable(false);
  const showEditButton = () => setEditButton(true);
  const noShowEditButton = () => setEditButton(false);
  return (
    <>
      <div
        style={{
          height: '50px',
          marginTop: '15px',
          boxShadow: '0 0 2px 2px #666',
          width: '250px',
          display: 'flex',
          verticalAlign: 'middle',
        }}
        onMouseOver={showEditButton}
        onMouseOut={noShowEditButton}
      >
        <div
          onClick={onClick}
          onBlur={handleDisEditable}
          style={{
            height: 'inherit',
            width: '220px',
            verticalAlign: 'middle',
          }}
        >
          <input
            defaultValue={card.card_name}
            disabled={!editable}
            ref={cardInputEL}
            style={{
              height: 'inherit',
              width: 'inherit',
              verticalAlign: 'middle',
            }}
          />
        </div>

        <div
          onClick={handleEditable}
          style={{ width: 30, height: 50 }}
        >
          <AiFillEdit
            opacity={!editbutton ? 0 : '0.5'}
            size='20'
          />
        </div>
      </div>
      {
        openModal
        &&
        <WorkListCardModal
          cardId={card.card_id}
          show={openModal}
          ws_id={ws_id}
          
          handle={handleModal}

        />
      }
    </>
  );
}

export default WorkListCard;