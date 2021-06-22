import React from "react";
import Sidebar from "./layout/Sidebar";
import Home from "./pages/home";
import Header from "./layout/Header";
import Workspace from "./pages/workspace";
import Board from "./pages/workspace/Board";

const style = {
    display:"flex"
}


const side ={
    background:'#7986cb'
}

const horizontal = {
  width:1920,
  overflowX:"scroll"
}


const App = ()=>{

    return (
        <>
        <Header/>

        <div style={style}>
        <div style={side}>
          <Sidebar />
        </div>

        <div>
      
          <div>
            <Home/>
          </div>
        </div>
      </div>
        <Workspace/>

        <div style={horizontal}>
          <Board/>
        </div>


        </>
    )
}

export default App;