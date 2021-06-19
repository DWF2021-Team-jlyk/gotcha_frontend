import React from "react";
import Sidebar from "./layout/Sidebar";
import Home from "./pages/home";
import Header from "./layout/Header";
import Workspace from "./pages/workspace";
import {fade, makeStyles} from "@material-ui/core/styles";

const style = {
    display: "flex"
}

const headerWidth = {
    width: 1680
}

const side = {
    background: '#7986cb'
}

const App = () => {
    return (
        <>
            <Header/>
            <div style={style}>
                <div style={side}>
                    <Sidebar/>
                </div>
                <div>
                    <div>
                        <Home/>
                    </div>
                </div>
            </div>
            <Workspace/>
        </>
    )
}

export default App;