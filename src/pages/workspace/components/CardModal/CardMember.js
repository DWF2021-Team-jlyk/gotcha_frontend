import React, { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {postWorkspaceMember} from '../../../../modules/workspaceMember'
import { postCardMember } from '../../../../modules/cardMember';
import Form from 'react-bootstrap/Form'

const avatarIcon = (id) => {
  let returnStr = id.charAt(0);
  for (let i = 1; i < id.length; i++) {
    if (id.charAt(i) === '@') break;
    if (id.charAt(i) === id.charAt(i).toUpperCase())
      returnStr += id.charAt(i);
  }
  return returnStr;
};


const CardMember = ({card}) => {
  const cardMem = useSelector(state=>state.cardMember.members);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(postCardMember(card.card_id));
  }, []);

 return (
    <div>
      <h5>
        {' '}
        <AiOutlineUser /> Members{' '}
      </h5>

      <div style={{ display: 'flex' }}>

        {cardMem?.map((value, key) => {
          return (
            <Avatar
              // onClick={(event) => {
              // }}
              style={{ margin: '10px 10px 0px 5px' }}
            >
        
              {avatarIcon(value.user_id)}
            </Avatar>
          );
        })}
      </div>



    </div>
  );
};

export default CardMember;