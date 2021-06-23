import React, { useState, useRef } from "react";
import { Button, Form, FormControl, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import Badge from '@material-ui/core/Badge';
import ListItemText from "@material-ui/core/ListItemText";
import "../css/font.css";

import {
  IoIosNotificationsOutline,
  IoMdAdd,
  IoPersonCircleOutline,
} from "react-icons/all";

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

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Navbar
      variant="dark"
      className="justify-content-between"
      sticky="top"
      style={{
        background: "#3F51B5",
      }}
    >
      <Navbar.Brand
        as={Link}
        to="/"
        style={{
          marginLeft: 20,
        }}
      >
        <div className="logofont">GotCha</div>
      </Navbar.Brand>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
          style={{
            marginRight: 10,
            width: 300,
          }}
        />
        <Button variant="light" style={{ color: "#3f51b5" }}>
          Search
        </Button>
      </Form>
      <div
        style={{
          marginRight: 20,
        }}
      >
        <IoMdAdd color="white" size="30" onClic />
        &ensp;
        <Badge badgeContent={4} color="secondary">
        <IoIosNotificationsOutline
          color="#FFFFFF"
          size="30"
          onClick={handleClick}
        />
        </Badge>
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
        &ensp;
        <Link to="/mypage">
          <IoPersonCircleOutline color="#FFFFFF" size="30" />
        </Link>
        &ensp;
        <Link
          to="/Login"
          style={{
            marginLeft: 10,
            fontSize: 15,
            color: "#ffffff",
            textDecoration: "none",
          }}
        >
          LOGOUT
        </Link>
      </div>
    </Navbar>
  );
};

export default Header;
