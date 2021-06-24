import React from "react";
import "../../layout/css/Layout.css";
import WorkSpaceCard from "./components/WorkSpaceCard";
import { Card, Row } from "react-bootstrap";
import Notification from "./Notification";
import "./Cards.css";

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
      textAlign:"center"
    },
  };

  const Noti = {
    width: 500,
    marginTop: 50,
  };

  return (
    <div style={style}>
      {/*admin , member 워크 스페이스를 띄우기 위한 div*/}
      <div>
        <Card style={workspaces.style}>
          <Card.Header>
            <h3 style={{textAlign:"center"}}>Admin</h3>
          </Card.Header>

          <Card.Body className="workspaces">
            <Row>
              {admin.map((workspace, index) => {
                return (
                  <WorkSpaceCard
                    workspaces={workspace}
                    key={index}
                  ></WorkSpaceCard>
                );
              })}
            </Row>
          </Card.Body>
        </Card>

        <Card style={workspaces.style}>
          <Card.Header>
            <h3 style={{textAlign:"center"}}>MEMBER</h3>
          </Card.Header>

          <Card.Body className="workspaces">
            <Row>
              {member.map((workspace, index) => {
                return (
                  <WorkSpaceCard
                    workspaces={workspace}
                    key={index}
                  ></WorkSpaceCard>
                );
              })}
            </Row>
          </Card.Body>
        </Card>
      </div>

      <div style={Noti}>
        <Notification notis={noti}/>
      </div>
    </div>
  );
};
export default Home;
