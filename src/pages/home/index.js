import React from "react";
import "../../layout/css/Layout.css";
import WorkSpaceCard from "../../components/WorkSpaceCard";
import {Button, Card, Row} from "react-bootstrap";

const Home = () => {
    return (
        <div className="content">
            <Row>
                <WorkSpaceCard title="test"/>
                <WorkSpaceCard title="test"/>
                <WorkSpaceCard title="test"/>
                <WorkSpaceCard title="test"/>
                <WorkSpaceCard title="test"/>
                <WorkSpaceCard title="test"/>
                <WorkSpaceCard title="test"/>
                <WorkSpaceCard title="test"/>
            </Row>
        </div>
    )
}

export default Home;