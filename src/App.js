import React, {useState} from "react";
import Sidebar from "./layout/Sidebar/index";
import Home from "./pages/home";
import Header from "./layout/Header";
// import Workspace from "./pages/workspace";
import {Route, Switch} from "react-router-dom"
import AppInitData from "./DumiData/AppInitData";
import Content from "./pages/board_content";
import loadable from "@loadable/component"

const Workspace = loadable(()=>import("./pages/workspace/index"));

const style = {
    display: "flex"
}
const side = {
    background: '#7986cb'
}

const horizontal = {
    width: 1920,
    overflowX: "scroll"
}
const App = () => {
    const [adminWorkSpace, setAdminWorkSpace] = useState(
        AppInitData.workspaces.filter((workspace)=>{
            return workspace.role_id === 1;
        })
    );
    const [memberWorkSpace, setMemberWorkSpace] = useState(
        AppInitData.workspaces.filter((workspace)=>{
            return workspace.role_id === 2;
        })
    );
    const [favWorkSpace, setFavWorkSpace] = useState(
        AppInitData.workspaces.filter((workspace)=>{
            return workspace.is_fav === 1;
        })
    )
    return (
        <>
            <Header/>
            <div style={style}>
                <div style={side}>
                    <Sidebar
                        admin={adminWorkSpace}
                        fav={favWorkSpace}
                        member={memberWorkSpace}
                    />
                </div>
                <div>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/workspace" component={Workspace}/>
                        <Route exact path="/board_content" component={Content}/>
                    </div>
                </div>
            </div>
            <footer>
                this is footer
            </footer>
        </>
    )
}

export default App;