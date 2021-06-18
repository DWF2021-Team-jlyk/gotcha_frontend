import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  
  root: {
    width: 250,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.background.paper,

  },
  nested: {
    paddingLeft: theme.spacing(4),
  },

  navName:{
    paddingTop: 20,
    paddingBottom:15,
    color:theme.palette.background.paper,
    fontSize:'1.75rem'
  }
  ,
  sub:{
    paddingBottom:20,
  }
  
}));


const Sidebar = () => {
  const classes = useStyles();
  const [open1, setOpen1] = React.useState(true); //열릴 때 true
  const [open2, setOpen2] = React.useState(true); //열릴 때 true
  const [open3, setOpen3] = React.useState(true); //열릴 때 true

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleClick3 = () => {
    setOpen3(!open3);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader className={classes.navName} component="div" id="nested-list-subheader">
          WorkSpace List
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button onClick={handleClick1}>
        <ListItemIcon>
          <StarBorder />
        </ListItemIcon>
        <ListItemText primary="즐겨찾기" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
        {/*             true        false*/}
      </ListItem>

      <Collapse className={classes.sub} in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="workSpace1" />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemText primary="workSpace2" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleClick2}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Admin WorkSpace" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
        {/*             true        false*/}
      </ListItem>

      <Collapse className={classes.sub} in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="workSpace1" />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemText primary="workSpace2" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleClick3}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Admin WorkSpace" />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse className={classes.sub} in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="workSpace1" />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemText primary="workSpace2" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

export default Sidebar;
