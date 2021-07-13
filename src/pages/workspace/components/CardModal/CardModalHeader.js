import React from 'react';
import ModalHeader from 'react-bootstrap/ModalHeader';
import { TiDocument } from 'react-icons/ti';
import { useSelector } from 'react-redux';

const CardModalHeader = () => {
  const card = useSelector(state=>state.cardForModal.card);
  return (
    <ModalHeader
      style={{
        background: '#3f51b5',
      }}
      closeButton
    >
      <h3 style={{ color: 'white' }}>
        <TiDocument />
        {card.card_name}
      </h3>
    </ModalHeader>
  )
}

export default CardModalHeader;