import React, {useState} from "react";
import {Collapse, ListItem, ListItemText} from "@material-ui/core";
import StarBorder from "@material-ui/icons/StarBorder";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import List from "@material-ui/core/List";

const MainList = ({classes, listContent}) => {
    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen(!open);
    }
    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <StarBorder />
                </ListItemIcon>
                <ListItemText primary={listContent.title}/>
            </ListItem>

            <Collapse className={classes.sub} in={open} timeout="auto" unmountOnExit>
                {
                    listContent.workspaceList.map((workspace, index) =>{
                        return(
                            <List key={index} component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary={workspace.name} />
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