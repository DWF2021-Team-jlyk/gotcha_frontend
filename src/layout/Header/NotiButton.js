import React, { useCallback } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IoIosNotificationsOutline } from 'react-icons/all';
import ListItemText from '@material-ui/core/ListItemText';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changeNotiRead } from '../../modules/notification';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const NotiButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const changeRead = useCallback(
    noti_id=>dispatch(changeNotiRead(noti_id)),
    [dispatch]
  )
  const onClick = noti => {
    history.push(`/workspace/${noti.ws_id}`);
    changeRead(noti.noti_id);
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const notification = useSelector(state => state.notification);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IoIosNotificationsOutline
        color='#FFFFFF'
        size='30'
        onClick={handleClick}
      />

      <StyledMenu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {
          notification
            .filter(noti => !noti.noti_read)
            .map(noti => {
              return <StyledMenuItem>
                  <ListItemText
                    primary={`notiSpace: ${noti.workspaceName} notiType: ${noti.type}`}
                    onClick={e=>onClick(noti)}
                  />
              </StyledMenuItem>;
            })
        }
      </StyledMenu>
    </>
  );
};

export default NotiButton;
