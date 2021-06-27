import React, { useEffect, useState } from 'react';
import '../../layout/css/Layout.css';
import WorkSpaceCard from './components/WorkSpaceCard';
import { Card, Row } from 'react-bootstrap';
import Notification from './Notification';
import './Cards.css';
import axios from 'axios';
import AppInitData from '../../DummyData/AppInitData';
import WorkSpaceArea from './container/WorkSpaceArea';

const Home = () => {
  const style = {
    display: 'flex',
  };

  const Noti = {
    width: 500,
    marginTop: 50,
  };


  // const [adminWorkspace, setAdminWorkspace] = useState([]);
  // const [memberWorkspace, setMemberWorkspace] = useState([]);
  //
  // const getList = async () => {
  //   const wsResult = await axios.post("/wsList", {
  //     user_id: "user01@naver.com",
  //   });
  //
  //   setAdminWorkspace(
  //     wsResult.data.filter((workspace) => {
  //       return workspace.ROLE_ID === 1;
  //     })
  //   );
  //
  //   setMemberWorkspace(
  //     wsResult.data.filter((workspace) => {
  //       return workspace.ROLE_ID === 2;
  //     })
  //   );
  // };
  //
  // const getnotiList = async () => {
  //   const notiResult = await axios.post("/notiList", {
  //     user_id: "user01@naver.com",
  //   });
  //   setNotilist(notiResult.data)
  //
  // };
  //
  // useEffect(() => {
  //   getList();
  //   getnotiList();
  // }, []);
  //
  // console.log(notilist)

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