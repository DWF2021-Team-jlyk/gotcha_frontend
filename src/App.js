import React from "react";
import Sidebar from "./layout/Sidebar";
import Home from "./pages/home";
import Header from "./layout/Header";
import Workspace from "./pages/workspace";
import Login from "./pages/user/Login";
import Join from "./pages/user/Join";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Code from "./pages/user/Code";

const style = {
    display:"flex",
    position: "absolute",
    top: "23%",
    left: "50%",
    transform: "translateX(-50%)",
}

const headerWidth = {
    width: 1680
}

const side ={
    background:'#7986cb'
}

const title = {
  
}


const App = ()=>{
   

    return (
      <>
      {/* <Header/> */}

      <div style={style}>
        {/* <div style={side}>
          <Sidebar />
        </div> */}
        
        <div>
          <div>
            {/* <Home /> */}
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/Join" component={Join} >
                <Join />
              </Route>  
              <Route path="/Code" component={Code} >
                <Code/>
              </Route>
            </Switch>
          </div>
        </div>
      </div>

        {/* <Workspace/>  */}
      </>
    )
}

export default App;