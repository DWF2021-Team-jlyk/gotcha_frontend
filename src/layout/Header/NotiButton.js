import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Badge from "@material-ui/core/Badge";
import { IoIosNotificationsOutline } from "react-icons/all";
import ListItemText from "@material-ui/core/ListItemText";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const NotiButton = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IoIosNotificationsOutline
        color="#FFFFFF"
        size="30"
        onClick={handleClick}
      />

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText primary="ws_name , 알림이 왔습니다ㅏㅏㅏㅏㅏ" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemText primary="ws_name , 알림이 왔습니다ㅏㅏㅏㅏㅏ" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemText primary="ws_name , 알림이 왔습니다ㅏㅏㅏㅏㅏ" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemText primary="ws_name , 알림이 왔습니다ㅏㅏㅏㅏㅏ" />
        </StyledMenuItem>
      </StyledMenu>
    </>
  );
};

export default NotiButton;
