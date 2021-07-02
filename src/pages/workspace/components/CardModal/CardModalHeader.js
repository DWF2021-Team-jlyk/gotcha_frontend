import React from 'react';
import ModalHeader from 'react-bootstrap/ModalHeader';
import { TiDocument } from 'react-icons/ti';

const CardModalHeader = ({cardName}) => {
  return (
    <ModalHeader
      style={{
        background: '#3f51b5',
      }}
      closeButton
    >
      <h3 style={{ color: 'white' }}>
        <TiDocument /> {cardName}
      </h3>
    </ModalHeader>
  )
}

export default CardModalHeader;