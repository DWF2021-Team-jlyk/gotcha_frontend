import {Button, Collapse, ListItem, ListItemText} from "@material-ui/core";
import List from "@material-ui/core/List";
import SettingWorkspace from "./SettingWorkspace";
import React from "react";


const SubList = ({classes, listContent, open}) => {
    return (
        <Collapse className={classes.sub} in={open} timeout="auto" unmountOnExit>
            {
                listContent.workspaceList.map((workspace, index) =>{
                    return(
                        <List key={index} component="div" disablePadding>
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
    )
}

export default SubList