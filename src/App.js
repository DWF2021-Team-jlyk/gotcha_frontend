import React, {useState} from "react";
import Sidebar from "./layout/Sidebar/index";
import Home from "./pages/home";
import Header from "./layout/Header";
import Workspace from "./pages/workspace";
import {Route, Switch} from "react-router-dom"
import AppInitData from "./DumiData/AppInitData";

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
        AppInitData.admin
    );
    const [memberWorkSpace, setMemberWorkSpace] = useState(
        AppInitData.member
    );
    const [favWorkSpace, setFavWorkSpace] = useState(
        AppInitData.fav
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