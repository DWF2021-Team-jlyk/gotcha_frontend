import React, { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {postWorkspaceMember} from '../../../../modules/workspaceMember'
import { postCardMember } from '../../../../modules/cardMember';
import Form from 'react-bootstrap/Form'
import AvatarIcon from '../../../../Functions/AvatarIcon';

const CardMember = () => {
  const cardMem = useSelector(state=>state.cardMember.members);
  const card = useSelector(state=>state.cardForModal.card);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(postCardMember(card?.card_id));
  }, [card]);

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
              key={value.user_id}
              style={{ margin: '10px 10px 0px 5px' }}>
              {AvatarIcon(value.user_id)}
            </Avatar>
          );
        })}
      </div>



    </div>
  );
};

export default CardMember;