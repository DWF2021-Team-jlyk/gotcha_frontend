import React, {useState} from "react";
import {Nav} from "react-bootstrap";
import "../../layout/css/Layout.css"
import WorkList from "./WorkList";
import Card from "react-bootstrap/Card";
import loadable from "@loadable/component";

const Calendar = loadable(() => import('../calendar'));
const Board = loadable(()=>import("../board"));


const Workspace = () => {
    const [value, setValue] = useState(1);

    return (
        <Card
            style={{
                margin:20,
                width:1600,
                height:900
            }}
        >
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#WorkList">
                    <Nav.Item>
                        <Nav.Link href="#WorkList" onSelect={e => {setValue(1)}}>WorkList</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#Calendar" onSelect={e => setValue(2)}>Calendar</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#Board" onSelect={e => setValue(3)}>Board</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                {value === 1 && <WorkList/>}
                {value === 2 && <Calendar/>}
                {value === 3 && <Board/>}
            </Card.Body>
        </Card>
    )
}

export default Workspace;