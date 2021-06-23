import React, {useState} from "react";
import {Button, Collapse, ListItem, ListItemText} from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import SubList from "./SubList";
import {AiOutlineStar} from "react-icons/all";
import { FaUserCog, FaUsers } from "react-icons/fa";

const MainList = ({category, classes, workspaces}) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    }
    const categorySwitch = (category) => {
        switch(category){
            case "ADMIN" : return (<FaUserCog size="30"/>);
            case "MEMBER" : return (<FaUsers size="30"/>);
            default: return (<AiOutlineStar size="30"/>);

        }
    }
    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    {categorySwitch(category)}
                </ListItemIcon>
                <ListItemText primary={category}/>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            
            <SubList
                open={open}
                workspaces={workspaces}
                classes={classes}
                category={category}
            />
        </>
    )
}

export default MainList;