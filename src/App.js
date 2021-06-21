import React from "react";
import Sidebar from "./layout/Sidebar/index";
import Home from "./pages/home";
import Header from "./layout/Header";
import Workspace from "./pages/workspace";

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
                        <Workspace/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;