import React from "react";
import "../../layout/css/Layout.css";
import WorkSpaceCard from "../../components/WorkSpaceCard";
import { Card, Row } from "react-bootstrap";
import Notification from "../../layout/Notification/Notification";

const Home = () => {
  const style = {
    display: "flex",
  };

  const workspace = {
    width: 1000,
    marginTop: 50,
    marginRight: 50,
  };

  const adminWorkspace = {
    paddingLeft: 50,
  };

  const memberWorkspace = {
    marginTop: 50,
    paddingLeft: 50,
  };

  const Noti = {
    width: 550,
    marginTop: 50,
  };

  return (
    <div style={style}>
      <div style={workspace}>
        {/* admin workspace */}
        <div style={adminWorkspace}>
          <Card>
            <Card.Header>ADMIN</Card.Header>
            <Card.Body>
              <Row>
                {[0, 1, 2, 3, 4, 5].map((value) => {
                  return <WorkSpaceCard title="test" key={value} />;
                })}
              </Row>
            </Card.Body>
          </Card>
        </div>

        {/* member workspace */}
        <div style={memberWorkspace}>
          <Card>
            <Card.Header>Member</Card.Header>
            <Card.Body>
              <Row>
                {[0, 1, 2, 3, 4, 5].map((value) => {
                  return <WorkSpaceCard title="test" key={value} />;
                })}
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div style={Noti}>
        <Notification/>
      </div>
    </div>
  );
};
export default Home;
