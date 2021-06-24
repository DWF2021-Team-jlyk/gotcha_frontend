import React, { useEffect, useState } from "react";
import "../../layout/css/Layout.css";
import WorkSpaceCard from "../../components/WorkSpaceCard";
import { Card, Row } from "react-bootstrap";
import Notification from "./Notification";
import "./Cards.css";
import axios from "axios";

const Home = ({ admin, member, noti }) => {
  const style = {
    display: "flex",
  };

  const workspaces = {
    //names: ["ADMIN", "MEMBER"],
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
  const [notilist, setNotilist] = useState([]);

  const getList = async () => {
    const wsResult = await axios.post("/wsList", {
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
    const notiResult = await axios.post("/notiList", {
      user_id: "user01@naver.com",
    });
    setNotilist(notiResult.data)

  };

  useEffect(() => {
    getList();
    getnotiList();
  }, []);

  console.log(notilist)

  return (
    <div style={style}>   
      <div>
        {[
          { title: "Admin", workspaces: adminWorkspace },
          { title: "Member", workspaces: memberWorkspace },
        ].map((data, index) => {
          return (
            <>
              <Card style={workspaces.style}>
                <Card.Header>
                  <h3 style={{ textAlign: "center" }}>{data.title}</h3>
                </Card.Header>

                <Card.Body className="workspaces">
                  <Row>
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
        <Notification notification={notilist} />
      </div>
    </div>
  );
};
export default Home;
