import {Button, Collapse, ListItem, ListItemText} from "@material-ui/core";
import List from "@material-ui/core/List";
import SettingWorkspace from "./SettingWorkspace";
import React from "react";
import {Link} from "react-router-dom";


const SubList = ({classes, workspaces, open, category}) => {
    return (
        <Collapse className={classes.sub} in={open} timeout="auto" unmountOnExit>
            {
                workspaces.map((workspace, index) => {
                    return (
                        <List key={workspace.id} component="div" disablePadding>
                            <ListItem className={classes.nested}>
                                <Button>
                                    <Link
                                        style={{
                                            color: "inherit",
                                            textDecoration: "none",
                                            underline: "none"
                                        }}
                                        to="/workspace"
                                    >
                                        <ListItemText primary={workspace.name}/>
                                    </Link>
                                </Button>
                                {category !== "FAVORITE" &&
                                <SettingWorkspace workspace={workspace} role={category}/>}
                            </ListItem>
                        </List>
                    )
                })
            }
        </Collapse>
    )
}

export default SubList