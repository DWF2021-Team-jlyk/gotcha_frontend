import React  from 'react';
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core/styles";
import MainList from "./MainList";
import "./sidebar.css"
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    navName: {
        paddingTop: 20,
        paddingBottom: 15,
        color: theme.palette.background.paper,
        fontSize: "1.75rem",
    },
}));

const Sidebar = () => {
    const classes = useStyles();
    const workspaces = useSelector(state=>state.workspaces.workspaces);
    const fav = workspaces.filter(workspace=>workspace.is_fav);
    const admin = workspaces.filter(workspace=>workspace.role_id===1);
    const member = workspaces.filter(workspace=>workspace.role_id===2);

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
            <MainList category="FAVORITE" workspaces={fav}/>
            <MainList category="ADMIN" workspaces={admin}/>
            <MainList category="MEMBER" workspaces={member}/>
        </List>
    );
};

export default Sidebar;
