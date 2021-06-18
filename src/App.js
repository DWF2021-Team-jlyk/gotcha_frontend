import React from "react";
import Sidebar from "./layout/Sidebar";
import Home from "./pages/home";
import Header from "./layout/Header";
import Workspace from "./pages/workspace";
import {fade, makeStyles} from "@material-ui/core/styles";

const sidebarWidth = 250;

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    root: {
        display: "flex",
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sidebar: {
        [theme.breakpoints.up("sm")]: {
            width: sidebarWidth,
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.background.paper,
            flexShrink: 0
        }
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${sidebarWidth}px)`,
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.background.paper,
            fontSize: 25,
        }
    },
    main: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${sidebarWidth}px)`,
            marginLeft: sidebarWidth + 10
        }
    },

    navName: {
        paddingTop: 20,
        paddingBottom: 15,
        color: theme.palette.background.paper,
        fontSize: '1.75rem',
        width: 250,
    }
    ,
    sub: {
        paddingBottom: 20,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
}));


const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Sidebar classes={classes}/>
            <div>
                <Header classes={classes}/>
                <Home/>
                <Workspace/>
            </div>
        </div>
    )
}

export default App;