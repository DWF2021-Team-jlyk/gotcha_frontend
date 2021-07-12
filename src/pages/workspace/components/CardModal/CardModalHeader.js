import React from 'react';
import ModalHeader from 'react-bootstrap/ModalHeader';
import { TiDocument } from 'react-icons/ti';

const CardModalHeader = ({card}) => {
  return (
    <ModalHeader
      style={{
        background: '#3f51b5',
      }}
      closeButton
    >
      <h3 style={{ color: 'white' }}>
        <TiDocument /> <span style={{fontSize:"1.5rem"}}>{card.card_name}</span>
      </h3>
    </ModalHeader>
  )
}

export default CardModalHeader;