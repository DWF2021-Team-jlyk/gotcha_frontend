import React from 'react';
import { Avatar, Hidden } from '@material-ui/core';
import { Button, Col } from 'react-bootstrap';
import '../css/workspaceSettingModal.css';
import AvatarIcon from '../../Functions/AvatarIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import axios from 'axios';
import apiAxios from '../../lib/apiAxios';

const onClick = (list, setList, userId) => {
  const changeList = list.filter(list => list !== userId);
  setList(changeList);
}

const UserAvatar = (props) => {
  const { list, setList, user_id, admin, invite, ws_id, role } = props;
  const deleteMember = (user_id) => {
    apiAxios('/home/deleteMember', {
      ws_id,
      user_id
    })
  }
  return (
    <Col md={4} style={{ marginTop: 10 }}>
      <div className='avatorBorder'>
          {role == 'ADMIN' ?
            <>
              <div style={{ float: 'left' }}>
          <Avatar
            style={{ margin: '10px 10px 0px 5px', fontSize: '13px' }}
          >
            {AvatarIcon(user_id)}
          </Avatar>
        </div>
        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {user_id}
              </div>

              <div style={{ marginTop: 5 }}>
                {
                  
                   invite ?
                    (user_id !== admin ?
                      <Button
                      variant='danger'
                      style={{ fontSize: '.8rem' }}
                      onClick={e => {
                        setList(list.filter(list => list !== user_id))
                        deleteMember(user_id);
                      }}
                    >
                      내보내기
                    </Button>
                    :
                    <Button
                      variant='danger'
                      style={{ fontSize: '.8rem' }}
                      onClick={e => {
                        setList(list.filter(list => list !== user_id))
                      }}
                      disabled
                    >
                      내보내기(Admin)
                    </Button>
                    )
                   :
                   <Button
                   variant='danger'
                   style={{ fontSize: '.8rem' }}
                   onClick={e => {
                     setList(list.filter(list => list !== user_id))
                   }}
                 >
                   내보내기
                 </Button>                   
                }
              </div>
              </div>
            </>
            :
            <>
            <div style={{ float: 'left' }}>
              <Avatar
                style={{ margin: '0px 10px 0px 5px', fontSize: '13px' }}
              >
                {AvatarIcon(user_id)}
              </Avatar>
            </div>
            <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <div style={{ marginTop:7, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {user_id}
            </div>
            </div>
            </>
            }
        </div>
    </Col >
  );
};

export default UserAvatar;
