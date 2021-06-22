import React, {useState} from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core/styles";
import MainList from "./MainList";
import listContent from "../../DumiData/AppInitData";
import AppInitData from "../../DumiData/AppInitData";

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

const Sidebar = ({admin, fav, member}) => {
    const classes = useStyles();
    const [subListData, setsubListData] = useState(AppInitData);


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
            {/*{*/}
            {/*    listContent.map((value, index) => {*/}
            {/*        return <MainList key={index} classes={classes} listContent={value}/>*/}
            {/*    })*/}
            {/*}*/}
        </List>
    );
};

export default Sidebar;
