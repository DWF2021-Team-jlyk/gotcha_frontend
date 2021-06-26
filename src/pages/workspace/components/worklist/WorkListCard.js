import React, { useState } from 'react';
import loadable from '@loadable/component';
import { AiFillEdit } from 'react-icons/all';

const WorkListCardModal = loadable(() => import('./WorkListCardModal'));

const WorkListCard = (props) => {
  const { cards, card, setCard } = props;
  const [openModal, setOpenModal] = useState(false);
  const [editable, setEditable] = useState(false);
  const handleModal = () => {
    setOpenModal(false);
  };
  const onClick = () => {
    if (editable === false)
      setOpenModal(true);
  };
  const onEditable = () => setEditable(true);
  const handleDisEditable = () => setEditable(false);
  return (
    <>
      <div
        style={{
          height: '50px',
          marginTop: '15px',
          boxShadow: '0 0 2px 2px #666',
          width: '220px',
          display: 'flex',
        }}
      >

        <div
          onClick={onClick}
          onBlur={handleDisEditable}
          contentEditable={editable}
          style={{
            height: 'inherit',
            width: '200px',
            verticalAlign: 'middle',
          }}
        >
          {card.card_name}
        </div>
        <div>
          <AiFillEdit
            onClick={onEditable}
            opacity='0.5'
            size='20'
          />
        </div>
      </div>
      {
        openModal
        &&
        <WorkListCardModal
          cardName={card.card_name}
          show={openModal}
          handle={handleModal}
        />
      }
    </>
  )
    ;
};

export default WorkListCard;