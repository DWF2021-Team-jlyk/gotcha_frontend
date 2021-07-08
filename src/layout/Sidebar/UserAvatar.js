import React from 'react';
import { Avatar } from '@material-ui/core';
import { Button, Col } from 'react-bootstrap';
import '../css/workspaceSettingModal.css';
import AvatarIcon from '../../Functions/AvatarIcon';

const onClick = (list, setList, userId) => {
  const changeList = list.filter(list=>list!==userId);
  setList(changeList);
}

const UserAvatar = (props) => {
  const {list , setList, user_id} = props;
  return (
    <Col md={4} style={{ marginTop: 10 }}>
      <div className='avatorBorder'>
        <div style={{ float: 'left' }}>
          <Avatar
            style={{ margin: '10px 10px 0px 5px' }}
          >
            {AvatarIcon(user_id)}
          </Avatar>
        </div>
        <div>
          <div>
            {user_id}
          </div>
          <div style={{ display: 'flex', marginTop: 5 }}>
            <div>
              <Button
                variant='danger'
                style={{ fontSize: '.8rem' }}
                onClick={e=>{
                  setList(list.filter(list=>list!==user_id))
                }}
              >
                내보내기
              </Button>
            </div>
          </div>
        </div>

      </div>
    </Col>


  );
};

export default UserAvatar;
