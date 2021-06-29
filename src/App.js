import React, { useState } from 'react';
import Sidebar from './layout/Sidebar';
import Home from './pages/home';
import Header from './layout/Header/header';
// import Header from "./layout/Header";
import Login from './pages/user/Login';
import { Route } from 'react-router-dom';
import AppInitData from './DummyData/AppInitData';
import loadable from '@loadable/component';
import './layout/css/font.css';
const Workspace = loadable(() => import('./pages/workspace'));
const Join = loadable(() => import('./pages/user/signUp'));
const Code = loadable(() => import('./pages/user/signUp/Code'));
const Mypage = loadable(() => import('./pages/user/mypage/mypage'));
const Pwdfind = loadable(() => import('./pages/user/pwdfind/Pwdfind'));

const style = {
  display: 'flex',
};


const side = {
  background: '#7986cb',
};
const horizontal = {
  width: 1920,
  overflowX: 'scroll',
};

const App = () => {
  return (
    <div className='font'>
      {/*<Switch>*/}
      <Route exact path='/Login' component={Login}>
        <div>
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
          <Sidebar/>
        </div>
        <div>
          <div>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/workspace/:ws_id'>
              <Workspace />
            </Route>
            <Route exact path='/Join'>
              <Join />
            </Route>
            <Route exact path='/Code'>
              <Code />
            </Route>
            <Route exact path='/Mypage'>
              <Mypage />
            </Route>
            <Route exact path='/Pwdfind'>
              <Pwdfind />
            </Route>
          </div>
        </div>
      </div>
      <footer>
        this is footer
      </footer>
      {/*</Route>*/}
      {/*</Switch>*/}
    </div>
  );
};

export default App;
