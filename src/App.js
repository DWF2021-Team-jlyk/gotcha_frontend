import React from "react";
import Sidebar from "./layout/Sidebar";
import Home from "./pages/home";
import Header from "./layout/Header";
import Workspace from "./pages/workspace";
import Mypage from "./pages/mypage/mypage"
import Board from "./pages/workspace/Board";

const style = {
    display:"flex"
}


const side ={
    background:'#7986cb'
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
            {/* <Home/> */}
            <Mypage/>
          </div>
        </div>
      </div>
        <Workspace/>
        {/* <Board/> */}   

        </>
    )
}

export default App;