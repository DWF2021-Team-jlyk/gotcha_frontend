import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import Avatar from '@material-ui/core/Avatar';

const avatarIcon = (id) => {
  let returnStr = id.charAt(0);
  for (let i = 1; i < id.length; i++) {
    if (id.charAt(i) === '@') break;
    if (id.charAt(i) === id.charAt(i).toUpperCase())
      returnStr += id.charAt(i);
  }
  return returnStr;
};


const CardMember = ({cardMember}) => {
  return (
    <div>
      <h5>
        {' '}
        <AiOutlineUser /> Members{' '}
      </h5>
      <div style={{ display: 'flex' }}>
        {cardMember?.map((value, key) => {
          return (
            <Avatar
              onClick={(event) => {
              }}
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