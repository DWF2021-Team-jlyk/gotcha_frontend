import React from "react";
import "../../layout/css/Layout.css";
import WorkSpaceCard from "../../components/WorkSpaceCard";
import {Card, Row} from "react-bootstrap";
import Notification from "./Notification";
import "./Cards.css"

const Home = ({admin, member}) => {
    const style = {
        display: "flex",
    };

    const workspaces = {
        names: ["ADMIN", "MEMBER"],
        style: {
            width: 1050,
            marginTop: 50,
            marginRight: 50,
            marginLeft: 50,
        }
    }

    const Noti = {
        width: 500,
        marginTop: 50,
    };

  
    function Cardrole () {
        if(workspaces.role_id == 1){
           return  <WorkSpaceCard workspaces={admin}></WorkSpaceCard>
        }else{
            return <WorkSpaceCard workspaces={member}></WorkSpaceCard>
        }
    }
    return (
        <div style={style}>
            {/*admin , member 워크 스페이스를 띄우기 위한 div*/}
            <div>
                
                {
                    workspaces.names.map((name, index) => {
                        return <Card style={workspaces.style} key={index}>
                            <Card.Header>
                                <h3>{name}</h3> 
                                {/* admin member 공간 분리 */}
                            </Card.Header>

                            <Card.Body className="workspaces">
                                <Row>
                                   {Cardrole}
                                    {/* {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => {
                                        return <WorkSpaceCard title="test" key={value} id={value}/>;
                                    })} */}
                                  
                                </Row>
                            </Card.Body>
                        </Card>
                    })
                }
            </div>

            <div style={Noti}>
                <Notification/>
            </div>
        </div>
    );
};
export default Home;