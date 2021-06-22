import React, {useState} from "react";
import Sidebar from "./layout/Sidebar/index";
import Home from "./pages/home";
import Header from "./layout/Header";
import Workspace from "./pages/workspace";
import Board from "./pages/workspace/Board";
import AppInitData from "./DumiData/AppInitData";

const style = {
    display: "flex"
}


const side = {
    background: '#7986cb'
}

const horizontal = {
  width:1920,
  overflowX:"scroll"
}
const App = () => {
    const [workspaceData, setWorkspaceData] = useState(
        AppInitData.admin,
        AppInitData.member,
        AppInitData.fav,
    );
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