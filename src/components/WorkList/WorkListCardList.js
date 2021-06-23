import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiFillCopy } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import WorkListCard from "./WorkListCard";


const CardHeaderStyle = {
  padding: "1rem",
  fontSize: "1rem",
  fontWeight: "bold",
};

const CardBodyStyle = {
  padding: "1rem",
  marginBottom: ".5rem",
};

const PlusIcon = {
  fontSize: "1.5rem",
  float: "right",
};

const IconMargin = {
  marginRight: 10
}

const ListStyle = {
    float:"left",
    width: "300px",
    marginRight: 10,
    height:"inherit",
    overflowY:"scroll",
}


const MyList = ({ list }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

      <Card style={ListStyle}>
        <Card.Header style={CardHeaderStyle}>
          {" "}{list.title}{" "}
          <AiOutlinePlusCircle style={PlusIcon} onClick={handleClick} />
        </Card.Header>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}><AiFillDelete style={IconMargin}/>List Delete</MenuItem>
          <MenuItem onClick={handleClose}><AiFillCopy style={IconMargin}/>List Copy</MenuItem>
          <MenuItem onClick={handleClose}>또 뭐넣지</MenuItem>
        </Menu>

        <Card.Body>
          {list.cards.map((card, index) => {
            return (
                <WorkListCard body={card}/>
            );
          })}
        </Card.Body>

        <Card.Footer>
          <Button variant="contained" color="primary" onClick={(e) => {}}>
            + Add Another Card
          </Button>
        </Card.Footer>
      </Card>
  );
};

export default MyList;
