import React from 'react';
import '../../layout/css/Layout.css';
import Notification from './Notification';
import './Cards.css';
import WorkSpaceArea from './container/WorkSpaceArea';

const Home = () => {
  const style = {
    display: 'flex',
  };

  const Noti = {
    width: 500,
    marginTop: 50,
  };
  return (
    <div style={style}>
      <div>
        <WorkSpaceArea areaType={1}/>
        <WorkSpaceArea areaType={2}/>
      </div>

      <div style={Noti}>
        <Notification/>
      </div>
    </div>
  );
};
export default Home;
