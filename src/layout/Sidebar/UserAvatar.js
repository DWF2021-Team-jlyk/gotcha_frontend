import React from 'react';
import { Avatar, Hidden } from '@material-ui/core';
import { Button, Col } from 'react-bootstrap';
import '../css/workspaceSettingModal.css';
import AvatarIcon from '../../Functions/AvatarIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import axios from 'axios';
import apiAxios from '../../lib/apiAxios';

const onClick = (list, setList, userId) => {
  const changeList = list.filter(list=>list!==userId);
  setList(changeList);
}

const UserAvatar = (props) => {
  const {list , setList, user_id, admin, invite, ws_id, member} = props;
  const deleteMember = (user_id) => {
    apiAxios('/home/deleteMember', {
      ws_id,
      user_id
    })
  }
  return (
    <Col md={4} style={{ marginTop: 10 }}>
      <div className='avatorBorder'>
        <div style={{ float: 'left' }}>
          <Avatar
            style={{ margin: '10px 10px 0px 5px', fontSize: '13px' }}
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
              {
                invite ?
                    (user_id !== admin ?
                    <Button
                    variant='danger'
                    style={{ fontSize: '.8rem' }}
                    onClick={e=>{
                      setList(list.filter(list=>list!==user_id))
                      deleteMember(user_id);
                    }}
                    >
                    추방하기
                    </Button>
                  :
                    <Button
                    variant='danger'
                    style={{ fontSize: '.8rem' }}
                    onClick={e=>{
                      setList(list.filter(list=>list!==user_id))
                    }}
                    disabled
                    >
                    추방하기
                    </Button>)
                :
                <Button
                variant='danger'
                style={{ fontSize: '.8rem' }}
                onClick={e=>{
                  setList(list.filter(list=>list!==user_id))
                }}
                >
                내보내기
                </Button>
              }
              
            </div>
          </div>
        </div>

      </div>
    </Col>


  );
};

export default UserAvatar;
