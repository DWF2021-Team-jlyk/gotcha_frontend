import React from 'react';
import { Avatar } from '@material-ui/core';
import { Button, Col} from 'react-bootstrap';
import '../css/workspaceSettingModal.css';

const AdminUserAvatar = (props) => {
  const avatarIcon = (id) => {
    let returnStr = id.charAt(0);
    for (let i = 1; i < id.length; i++) {
      if (id.charAt(i) === '@') break;
      if (id.charAt(i) === id.charAt(i).toUpperCase())
        returnStr += id.charAt(i);
    }
    return returnStr;
  };

  return (
    <Col md={4} style={{ marginTop: 10 }}>
      <div className='avatorBorder'>
        <div style={{ float: 'left' }}>
          <Avatar
            onClick={(event) => {
            }}
            style={{ margin: '10px 10px 0px 5px' }}
          >
            {avatarIcon(props.user_id)}
          </Avatar>
        </div>

        <div>
          <div>
            {props.user_id}
          </div>

          <div style={{ display: 'flex', marginTop: 5 }}>
            <div><Button variant='primary' style={{ fontSize: '.8rem' }}> To Admin</Button></div>
          </div>
        </div>
      </div>
    </Col>


  );
};

export default AdminUserAvatar;
