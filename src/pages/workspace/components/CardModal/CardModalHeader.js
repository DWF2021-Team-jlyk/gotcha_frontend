import React from 'react';
import ModalHeader from 'react-bootstrap/ModalHeader';
import { TiDocument } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import {AiOutlineClose} from 'react-icons/ai'
import { disappearModal } from '../../../../modules/cardModal';

const CardModalHeader = ({card}) => {
  const dispatch = useDispatch();
  return (
    <ModalHeader
      style={{
        background: '#3f51b5',
      }}
    >
      <h3 style={{ color: 'white' }}>
        <TiDocument /> <span style={{fontSize:"1.5rem"}}>{card?.card_name}</span>
      </h3>
      
      <div onClick={()=>dispatch(disappearModal())} style={{cursor: 'pointer'}}>
        <AiOutlineClose style={{color:'white', marginRight:18, fontSize:"1.8rem"}}/>
      </div>
    </ModalHeader>
  )
}

export default CardModalHeader;