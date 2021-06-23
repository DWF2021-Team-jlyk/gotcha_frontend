import React, {useState} from "react";
import Sidebar from "./layout/Sidebar";
import Home from "./pages/home";
import Header from "./layout/Header/header";
// import Header from "./layout/Header";
import Login from "./pages/login";
import {Route, Switch} from "react-router-dom";
import AppInitData from "./DumiData/AppInitData";
import loadable from "@loadable/component";
import {Row} from "react-bootstrap";

const Workspace = loadable(()=>import("./pages/workspace"));
const Join = loadable(()=>import("./pages/signUp"));
const Code = loadable(()=>import("./pages/signUp/Code"));
const Mypage = loadable(()=>import("./pages/mypage/mypage"));

const style = {
    display: "flex",
}

const LoginStyle = {
    display: "flex",
    position: "absolute",
    top: "23%",
    left: "50%",
    transform: "translateX(-50%)",
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
            {/*<Switch>*/}
            <Route exact path="/Login" component={Login}>
                <div style={LoginStyle}>
                    <Login/>
                </div>
            </Route>

            {/*<Route exact path="/">*/}
            <Header/>
            {/*<div style={{*/}
            {/*    display:"flex",*/}
            {/*    height:"100%"*/}
            {/*}}>*/}
            {/*    <Sidebar/>*/}
            {/*    <Home/>*/}
            {/*    /!*<Workspace/>*!/*/}
            {/*</div>*/}
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
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/workspace">
                            <Workspace/>
                        </Route>
                        <Route exact path="/Join">
                            <Join/>
                        </Route>
                        <Route exact path="/Code">
                            <Code/>
                        </Route>
                        <Route exact path="/Mypage">
                            <Mypage/>
                        </Route>
                    </div>
                </div>
            </div>
            <footer>
                this is footer
            </footer>
            {/*</Route>*/}
            {/*</Switch>*/}
        </>
    )
}

export default App;