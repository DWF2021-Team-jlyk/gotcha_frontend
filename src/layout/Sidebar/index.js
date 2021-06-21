import React from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core/styles";
import MainList from "./MainList";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 250,
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.background.paper,
    },
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

const Sidebar = () => {
    const classes = useStyles();

    const listContent = [
        {
            title: "즐겨찾기",
            workspaceList: [
                {name: "workspace1", role: "admin"}, {name: "workspace2", role: "member"}
            ]
        },
        {
            title: "Admin WorkSpace",
            workspaceList: [
                {name: "workspace1", role: "admin"}, {name: "workspace2", role: "admin"}
            ]
        },
        {
            title: "WorkSpace",
            workspaceList: [
                {name: "workspace1", role: "member"}, {name: "workspace2", role: "member"}
            ]
        },
    ]
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
            className={classes.root}
        >
            {
                listContent.map((value, index) => {
                    return <MainList key={index} classes={classes} listContent={value}/>
                })
            }
        </List>
    );
};

export default Sidebar;
