import React from "react";
import Sidebar from "./layout/Sidebar";
import Home from "./pages/home";
import Header from "./layout/Header";
import Workspace from "./pages/workspace";

const App = ()=>{
    return (
        <>
            <Sidebar/>
            <Header/>
            <Home/>
            <Workspace/>
        </>
    )
}

export default App;