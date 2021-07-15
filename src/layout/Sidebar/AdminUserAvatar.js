import React from 'react';
import { Avatar } from '@material-ui/core';
import { Button, Col} from 'react-bootstrap';
import '../css/workspaceSettingModal.css';
import AvatarIcon from '../../Functions/AvatarIcon';
import apiAxios from '../../lib/apiAxios';
import { useDispatch } from 'react-redux';
import { postWorkspaces } from '../../modules/workspace';

const AdminUserAvatar = (props) => {
  const dispatch = useDispatch();
  
  const toAdminHandler = () => {
    apiAxios('/home/leaveWorkspace', {ws_id: props.ws_id, user_id:props.user_id}).then(
      dispatch(postWorkspaces())  
    );
    
  }

  return (
    <Col md={4} style={{ marginTop: 10 }}>
      <div className='avatorBorder'>
        <div style={{ float: 'left' }}>
          <Avatar
            onClick={(event) => {
            }}
            style={{ margin: '10px 10px 0px 5px' }}
          >
            {AvatarIcon(props.user_id)}
          </Avatar>
        </div>

        <div>
          <div>
            {props.user_id}
          </div>

          <div style={{ display: 'flex', marginTop: 5 }}>
            <div><Button variant='primary' style={{ fontSize: '.8rem' }} onClick={toAdminHandler}> To Admin</Button></div>
          </div>
        </div>
      </div>
    </Col>


  );
};

export default AdminUserAvatar;
