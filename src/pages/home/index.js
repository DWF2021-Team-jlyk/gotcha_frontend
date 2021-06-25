import React, { useEffect, useState } from "react";
import "../../layout/css/Layout.css";
import WorkSpaceCard from "../../components/WorkSpaceCard";
import { Card, Row } from "react-bootstrap";
import Notification from "./Notification";
import "./Cards.css";
import axios from "axios";

const Home = () => {
  const style = {
    display: "flex",
  };

  const workspaces = {
    style: {
      width: 1050,
      marginTop: 50,
      marginRight: 50,
      marginLeft: 50,
      textAlign: "center",
    },
  };

  const Noti = {
    width: 500,
    marginTop: 50,
  };


  const [adminWorkspace, setAdminWorkspace] = useState([]);
  const [memberWorkspace, setMemberWorkspace] = useState([]);
  const [notiList, setNotiList] = useState([]);
  const [unreadNotiList, setUnreadNotiList] = useState([]);

  const getList = async () => {
    const wsResult = await axios.post("/home/wsList", {
      user_id: "user01@naver.com",
    });

    setAdminWorkspace(
      wsResult.data.filter((workspace) => {
        return workspace.ROLE_ID === 1;
      })
    );

    setMemberWorkspace(
      wsResult.data.filter((workspace) => {
        return workspace.ROLE_ID === 2;
      })
    );
  };

  const getnotiList = async () => {
    const notiResult = await axios.post("/home/notiList", {
      user_id: "user01@naver.com",
    });

    setUnreadNotiList( //읽지않은 list
      notiResult.data.filter((noti) => {
        return noti.NOTI_CHECKED === "0" //0이 읽지않음
      })
    )

    setNotiList(notiResult.data) //전체 list


  };

  useEffect(() => {
    getList();
    getnotiList();
  }, []);

  return (
    <div style={style}>   
      <div>
        {[
          // data 객체들
          { title: "Admin", workspaces: adminWorkspace, setWs: setAdminWorkspace},
          { title: "Member", workspaces: memberWorkspace, setWs: setMemberWorkspace},
        ].map((data, index) => {
          return (
            <>
              <Card style={workspaces.style}>
                <Card.Header>
                  <h3 style={{ textAlign: "center" }}>{data.title}</h3>
                </Card.Header>

                <Card.Body className="workspaces">
                  <Row>
                    {/* data객체들 중에서 workspaces만 받아와서 workspacecard에 넘겨준다*/}
                    {data.workspaces.map((workspace, index) => {
                      return (
                        <WorkSpaceCard workspaces={workspace} key={index} />
                      );
                    })}
                  </Row>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>

      <div style={Noti}>
        <Notification allNoti={notiList} unreadNoti={unreadNotiList} />
      </div>
    </div>
  );
};
export default Home;
