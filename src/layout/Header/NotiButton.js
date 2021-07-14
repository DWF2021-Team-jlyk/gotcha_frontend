import React, { useCallback, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IoIosNotificationsOutline } from 'react-icons/all';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changeNotiCheck, postNoti } from '../../modules/notification';
import { ListItem } from '@material-ui/core';

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
    noti_id=>dispatch(changeNotiCheck(noti_id)),
    [dispatch]
  )
  const onClick = noti => {
    history.push(`/workspace/${noti.ws_id}`);
    changeRead(noti.noti_id);
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const notification = useSelector(state => state.notification.noti);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(()=>{
    dispatch(postNoti());
  }, []);

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
            .filter(noti => noti.noti_checked !== "1")
            .map((noti, index) => {
              return <StyledMenuItem key={index}>
                <ListItem
                  key={index}
                  onClick={e=>{
                    onClick(noti);
                    handleClose();
                  }}
                >
                  {`notiSpace: ${noti.workspaceName} notiType: ${noti.type}`}
                </ListItem>
              </StyledMenuItem>;
            })
        }
      </StyledMenu>
    </>
  );
};

export default NotiButton;
