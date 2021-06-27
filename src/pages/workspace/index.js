import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import "../../layout/css/Layout.css"
import WorkList from "./WorkList";
import Card from "react-bootstrap/Card";
import loadable from "@loadable/component";
import { useParams } from "react-router-dom";
import axios from "axios";
import WorkSpaceData from "../../DummyData/WorkSpaceData";

const Calendar = loadable(() => import('../calendar'));
const Board = loadable(() => import("../board"));


const Workspace = () => {

    const { id } = useParams();
 
    const [value, setValue] = useState(1);

    const [lists, setLists] = useState([]);

    const [cards, setCards] = useState([]);


    const getList = async () => {
        const listResult = await axios.post("/main/wsList/list", {
            ws_id: id,
        });
        setLists(listResult.data);
    };

    const getCard = async () => {
        //console.log("lists to use in card:",lists);
        const cardResult = await axios.post("/main/wsList/list/card", {
            ws_id:id,
        }); 
        setCards(
            cardResult.data
       );}

    useEffect(() => {
        getList();
        getCard();
    }, [id]);

    return (
        <>
            <Card
                style={{
                    margin: 20,
                    width: 1600,
                    height: 900
                }}
            >
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#WorkList">
                        <Nav.Item>
                            <Nav.Link href="#WorkList" onSelect={e => { setValue(1) }}>WorkList</Nav.Link>
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
        </>
    );
};

export default Workspace;