import React, {useState} from "react";
import Sidebar from "./layout/Sidebar/index";
import Home from "./pages/home";
import Header from "./layout/Header";
import Workspace from "./pages/workspace";
import Login from "./pages/user/Login";
import Join from "./pages/user/Join";
import {Route, Switch} from "react-router-dom";
import Code from "./pages/user/Code";
import AppInitData from "./DumiData/AppInitData";
import Mypage from "./pages/mypage/mypage"

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
            <Switch>
                <Route exact path="/Login" component={Login}>
                    <div style={LoginStyle}>
                        <Login/>
                    </div>
                </Route>

                <Route exact path="/">
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
                                <Route path="/Join" component={Join}/>
                                <Route path="/Code" component={Code}/>
                                <Route path="/mypage" component={Mypage}/>
                            </div>
                        </div>
                    </div>
                    <footer>
                        this is footer
                    </footer>
                </Route>
            </Switch>
        </>
    )
}

export default App;