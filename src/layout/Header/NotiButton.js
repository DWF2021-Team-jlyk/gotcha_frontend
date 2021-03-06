import React, { useCallback, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IoIosNotificationsOutline } from 'react-icons/all';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { changeNotiCheck, postNoti } from '../../modules/notification';
import { Badge, ListItem } from '@material-ui/core';

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

const returnType = (type) => {
  switch (type) {
    case 'c':
      return '[카드]'; //card
    case 'b':
      return '[보드]'; //board
    case 'i':
      return '[초대]'; //invite
    case 'o':
      return '[퇴장]'
    default:
      return '[할일]'; //todo
  }
};

const NotiButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const notification = useSelector(state => state.notification.noti);

  const changeRead = useCallback(
    noti => dispatch(changeNotiCheck(noti)),
    [notification],
  );

  const onClick = noti => {
    history.push(`/workspace/${noti.WS_ID}`);
    changeRead(noti);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(postNoti());
  }, []);

  return (
    <>
      <Badge
        badgeContent={
          notification
            .filter(noti => noti.NOTI_CHECKED === '0')
            .length
        }
        color="secondary"
        max="999"
      >
        <IoIosNotificationsOutline
          color='#FFFFFF'
          size='30'
          onClick={handleClick}
        />
      </Badge>

      <StyledMenu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{maxHeight:400}}
      >
        {
          notification
            .filter(noti => noti.NOTI_CHECKED !== '1')
            .map((noti) => {
              return <StyledMenuItem key={noti.NOTI_ID}>
                <ListItem
                  key={noti.NOTI_ID}
                  onClick={e => {
                    onClick(noti);
                    handleClose();
                  }}
                >
                  {`${noti.WS_NAME} ${returnType(noti.NOTI_TYPE)}`}
                </ListItem>
              </StyledMenuItem>;
            })
        }
      </StyledMenu>
    </>
  );
};

export default NotiButton;