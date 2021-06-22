import React, {useState} from "react";
import {Button, Collapse, ListItem, ListItemText} from "@material-ui/core";
import StarBorder from "@material-ui/icons/StarBorder";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import List from "@material-ui/core/List";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import SettingWorkspace from "./SettingWorkspace";
import SubList from "./SubList";

const MainList = ({role, classes, workspaces}) => {
    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen(!open);
    }
    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    {
                        role==="admin" ?
                        <StarBorder /> : <InboxIcon />
                    }
                </ListItemIcon>
                <ListItemText primary={workspaces.title}/>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse className={classes.sub} in={open} timeout="auto" unmountOnExit>
            {
                workspaces.map((workspace, index) =>{
                    return(
                        <List key={workspace.id} component="div" disablePadding>
                            <ListItem className={classes.nested}>
                                <Button>
                                    <ListItemText primary={workspace.name} />
                                </Button>
                                <SettingWorkspace workspace={workspace}/>
                            </ListItem>
                        </List>
                    )
                })
            }
        </Collapse>
        </>
    )
}

export default MainList;