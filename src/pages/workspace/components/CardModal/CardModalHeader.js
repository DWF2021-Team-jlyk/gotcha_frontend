import React from 'react';
import ModalHeader from 'react-bootstrap/ModalHeader';
import { TiDocument } from 'react-icons/ti';

const CardModalHeader = () => {
  return (
    <ModalHeader
      style={{
        background: '#3f51b5',
      }}
      closeButton
    >
      <h3 style={{ color: 'white' }}>
        <TiDocument />
      </h3>
    </ModalHeader>
  )
}

export default CardModalHeader;