import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    content: {
        marginLeft:220,
        fontSize:28,
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        </div>
    )
}

export default Header;