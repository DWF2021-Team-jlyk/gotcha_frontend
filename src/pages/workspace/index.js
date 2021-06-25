import React, {useState} from "react";
import {Nav} from "react-bootstrap";
import "../../layout/css/Layout.css"
import WorkList from "./WorkList";
import WorkCard from "./WorkList";
import Card from "react-bootstrap/Card";
import loadable from "@loadable/component";
import {useParams} from "react-router-dom";
import axios from "axios";
import WorkSpaceData from "../../DummyData/WorkSpaceData";

const Calendar = loadable(() => import('../calendar'));
const Board = loadable(()=>import("../board"));


const Workspace = () => {
    const {ws_id} = useParams();
    const [value, setValue] = useState(1);

    const [lists, setLists] = useState(
        WorkSpaceData.lists.filter(list=>{
            list.list_id
        })
    )
    const [cards, setCards] = useState(
        WorkSpaceData.cards
    )
    // const getList = async () => {
    //     return await axios.post();
    // }

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
                {
                    value === 1
                    &&
                    <WorkList
                        lists={lists}
                        cards={cards}
                        setLists={setLists}
                        setCards={setCards}
                    />
                }
                {/*{value === 2 && <Calendar/>}*/}
                {/*{value === 3 && <Board/>}*/}
            </Card.Body>
        </Card>
    )
}

export default Workspace;