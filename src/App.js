import React from 'react';
import Login from './pages/user/Login';
import loadable from '@loadable/component';
import PublicRoute from './lib/pulblicRoute';
import PrivateRoute from './lib/privateRoute';
import './layout/css/font.css';

const Home = loadable(()=>import('./pages/home'));
const Workspace = loadable(() => import('./pages/workspace'));
const Join = loadable(() => import('./pages/user/signUp'));
const Code = loadable(() => import('./pages/user/signUp/Code'));
const Mypage = loadable(() => import('./pages/user/mypage/mypage'));
const Pwdfind = loadable(() => import('./pages/user/pwdfind/Pwdfind'));
const Sidebar = loadable(()=>import('./layout/Sidebar'));
const Header = loadable(()=>import('./layout/Header'));

const style = {
  display: 'flex',
};

const LoginStyle = {
  display: 'flex',
  position: 'absolute',
  top: '23%',
  left: '50%',
  transform: 'translateX(-50%)',
};

const side = {
  background: '#7986cb',
};
// const horizontal = {
//   width: 1920,
//   overflowX: 'scroll',
// };

const App = () => {
  return (
    <div className='font'>
      <PublicRoute restricted={true} component={Login} exact path='/Login'/>
      <PublicRoute restricted={true} component={Code} exact path='/Code' />
      <PublicRoute restricted={true} component={Join} exact path='/Join' />
      <PublicRoute restricted={true} component={Pwdfind} exact path='/Pwdfind' />
      <PrivateRoute component={Header} path='/'/>
      <div style={style}>
        <div style={side}>
          <PrivateRoute component={Sidebar} path='/'/>
        </div>
        <div>
          <div>
            <PrivateRoute component={Home} exact path='/' />
            <PrivateRoute component={Workspace} exact path='/workspace/:ws_id' />
            <PrivateRoute component={Mypage} exact path='/Mypage' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;