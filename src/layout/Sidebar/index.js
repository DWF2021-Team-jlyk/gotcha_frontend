import React, {useState} from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core/styles";
import MainList from "./MainList";
import "./sidebar.css"

const useStyles = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },

    navName: {
        paddingTop: 20,
        paddingBottom: 15,
        color: theme.palette.background.paper,
        fontSize: "1.75rem",
    },
    sub: {
        paddingBottom: 20,
    },
}));

const Sidebar = ({admin, fav, member}) => {
    const classes = useStyles();


    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader
                    className={classes.navName}
                    component="div"
                    id="nested-list-subheader"
                >
                    WorkSpace List
                </ListSubheader>
            }
            className="root"
        >
            <MainList category="FAVORITE" classes={classes} workspaces={fav}/>
            <MainList category="ADMIN" classes={classes} workspaces={admin}/>
            <MainList category="MEMBER" classes={classes} workspaces={member}/>
        </List>
    );
};

export default Sidebar;
