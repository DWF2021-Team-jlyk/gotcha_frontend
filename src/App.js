import React, { useEffect, useState } from "react";
import Sidebar from "./layout/Sidebar";
import Home from "./pages/home";
import Header from "./layout/Header/header";
// import Header from "./layout/Header";
import Login from "./pages/user/Login";
import { Route } from "react-router-dom";
import AppInitData from "./DummyData/AppInitData";
import loadable from "@loadable/component";
import "./layout/css/font.css";
import { useDispatch, useSelector } from "react-redux";
const Workspace = loadable(() => import("./pages/workspace"));
const Join = loadable(() => import("./pages/user/signUp"));
const Code = loadable(() => import("./pages/user/signUp/Code"));
const Mypage = loadable(() => import("./pages/user/mypage/mypage"));
const Pwdfind = loadable(() => import("./pages/user/pwdfind/Pwdfind"));

const style = {
  display: "flex",
};

const LoginStyle = {
  display: "flex",
  position: "absolute",
  top: "23%",
  left: "50%",
  transform: "translateX(-50%)",
};

const side = {
  background: "#7986cb",
};
const horizontal = {
  width: 1920,
  overflowX: "scroll",
};

const App = () => {
  // const dispatch = useDispatch();
  // const state = useSelector((state)=>{return state.count});
  // useEffect(()=>{
  //     handleAddCount();
  //  },[])
  //  const handleAddCount=()=>{
  //      dispatch({type:"ADD_COUNT",payload:state+1})
  //  }

  /**
   * 이 밑은 더미 데이터로 테스트 할 때 썼던 것들 입니다.
   */
  const [adminWorkSpace, setAdminWorkSpace] = useState(
    AppInitData.workspaces.filter((workspace) => {
      return workspace.role_id === 1;
    })
  );
  const [memberWorkSpace, setMemberWorkSpace] = useState(
    AppInitData.workspaces.filter((workspace) => {
      return workspace.role_id === 2;
    })
  );
  const [favWorkSpace, setFavWorkSpace] = useState(
    AppInitData.workspaces.filter((workspace) => {
      return workspace.is_fav === 1;
    })
  );

  /**
   * 이 위는 더미 데이터로 테스트 할 때 썼던 것들 입니다.
   */

  return (
    <div className="font">
      {/*<Switch>*/}
      <Route exact path="/Login" component={Login}>
        <div style={LoginStyle}>
          <Login />
        </div>
      </Route>

      {/*<Route exact path="/">*/}
      <Header />
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
              <Home />
            </Route>
            <Route exact path="/workspace/:id">
              <Workspace />
            </Route>
            <Route exact path="/Join">
              <Join />
            </Route>
            <Route exact path="/Code">
              <Code />
            </Route>
            <Route exact path="/Mypage">
              <Mypage />
            </Route>
            <Route exact path="/Pwdfind">
              <Pwdfind />
            </Route>
          </div>
        </div>
      </div>
      <footer>this is footer</footer>
      {/*</Route>*/}
      {/*</Switch>*/}
    </div>
  );
};

export default App;
